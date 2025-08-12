<template>
  <div class="dashboard">
    <!-- 四个模块网格布局 -->
    <div class="dashboard-grid">
      <!-- 左上模块：账号信息 -->
      <div class="module account-module">
        <div class="account-info">
          <div class="account-box">
            <div class="account-value">ZC5824021</div>
            <div class="account-label">账号</div>
          </div>
          <div class="balance-box">
            <div class="balance-value">$0</div>
            <div class="balance-label">余额</div>
          </div>
          <div class="status-box">
            <div class="status-value">正常</div>
            <div class="status-label">账号状态</div>
          </div>
        </div>
        
        <!-- 统计卡片 -->
        <div class="stats-card">
          <div class="stats-left">
            <div class="stats-number">0</div>
            <div class="stats-label">昨日消息发送数量</div>
          </div>
          <div class="stats-divider"></div>
          <div class="stats-right">
            <div class="stats-number">0</div>
            <div class="stats-label">昨日消息收取数量</div>
          </div>
        </div>
      </div>
      
      <!-- 右上模块：注意事项 -->
      <div class="module notice-module">
        <h3>注意事项</h3>
        <p>Double usa sms 正在beta测试中,如有疑问请与技术人员联系</p>
      </div>
      
      <!-- 左下模块：用户数据分析 -->
      <div class="module analysis-module">
        <h3>DOUBLE USA SMS 用户数据分析</h3>
        <p>敬请期待</p>
      </div>
      
      <!-- 右下模块：地图区域 -->
      <div class="module map-module">
        <h3>DOUBLE USA SMS 让您与世界亲密接触,展望未来。(用户行为统计,敬请期待)</h3>
        <div class="map-container">
          <div id="world-map" class="map-content"></div>
          
          <!-- 中心点标记 -->
          <div class="map-center-point">
            <div class="center-label">send from Vilnius</div>
          </div>
          
          <!-- 地图控制按钮 -->
          <div class="map-controls">
            <button class="zoom-btn zoom-in" @click="zoomIn">+</button>
            <button class="zoom-btn zoom-out" @click="zoomOut">-</button>
          </div>
          
          <!-- 信号波形图标 -->
          <div class="signal-wave"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      map: null,
      centerMarker: null,
      destinationMarkers: [],
      connectionLines: []
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // 确保Leaflet已加载
      if (typeof L === 'undefined') {
        console.error('Leaflet not loaded');
        return;
      }

      // 初始化地图
      this.map = L.map('world-map', {
        center: [54.6872, 25.2797], // Vilnius坐标
        zoom: 4,
        zoomControl: false, // 禁用默认缩放控件
        attributionControl: false // 禁用默认属性控件
      });

      // 添加OpenStreetMap瓦片图层
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 2
      }).addTo(this.map);

      // 添加中心点标记 (Vilnius)
      this.centerMarker = L.marker([54.6872, 25.2797], {
        icon: L.divIcon({
          className: 'center-marker',
          html: '<div class="center-circle"><span class="paper-plane">✈️</span></div>',
          iconSize: [60, 60],
          iconAnchor: [30, 30]
        })
      }).addTo(this.map);

      // 添加目标点标记
      const destinations = [
        { lat: 51.5074, lng: -0.1278, name: 'London' },      // 伦敦
        { lat: 48.8566, lng: 2.3522, name: 'Paris' },        // 巴黎
        { lat: 40.4168, lng: -3.7038, name: 'Madrid' },      // 马德里
        { lat: 41.9028, lng: 12.4964, name: 'Rome' },        // 罗马
        { lat: 52.5200, lng: 13.4050, name: 'Berlin' },      // 柏林
        { lat: 52.2297, lng: 21.0122, name: 'Warsaw' },      // 华沙
        { lat: 50.4501, lng: 30.5234, name: 'Kiev' },        // 基辅
        { lat: 59.3293, lng: 18.0686, name: 'Stockholm' },   // 斯德哥尔摩
        { lat: 59.9139, lng: 10.7522, name: 'Oslo' },        // 奥斯陆
        { lat: 60.1699, lng: 24.9384, name: 'Helsinki' },    // 赫尔辛基
        { lat: 40.7128, lng: -74.0060, name: 'New York' }    // 纽约
      ];

      destinations.forEach(dest => {
        const marker = L.marker([dest.lat, dest.lng], {
          icon: L.divIcon({
            className: 'dest-marker',
            html: '<div class="dest-point"></div>',
            iconSize: [12, 12],
            iconAnchor: [6, 6]
          })
        }).addTo(this.map);

        // 添加连接线
        const line = L.polyline([
          [54.6872, 25.2797], // Vilnius
          [dest.lat, dest.lng] // 目标点
        ], {
          color: '#3b82f6',
          weight: 2,
          opacity: 0.6,
          dashArray: '5, 5'
        }).addTo(this.map);

        this.destinationMarkers.push(marker);
        this.connectionLines.push(line);
      });
    },
    zoomIn() {
      if (this.map) {
        this.map.zoomIn();
      }
    },
    zoomOut() {
      if (this.map) {
        this.map.zoomOut();
      }
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
  background: #f5f7fa;
  min-height: 100vh;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  height: calc(100vh - 40px);
  max-height: 800px;
}

.module {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  min-height: 300px;
}

/* 左上模块：账号信息 */
.account-module {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}

.account-info {
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
}

.account-box {
  width: 378px;
  height: 100px;
  text-align: center;
  padding: 0;
  border-radius: 10px;
  flex: none;
  background: #3b82f6;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* .account-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.25);
} */

.account-value {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1;
  display: block;
}

.account-label {
  font-size: 16px;
  opacity: 0.95;
  font-weight: 500;
  display: block;
  line-height: 1;
}

.balance-box {
  width: 244px;
  height: 100px;
  text-align: center;
  padding: 0;
  border-radius: 10px;
  flex: none;
  background: #ef4444;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* .balance-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.25);
} */

.balance-value {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1;
  display: block;
}

.balance-label {
  font-size: 15px;
  opacity: 0.95;
  font-weight: 500;
  display: block;
  line-height: 1;
}

.status-box {
    width: 126px;
height: 100px;
  text-align: center;
  padding: 0;
  border-radius: 10px;

  flex: none;
  background: #10b981;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* .status-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.25);
} */

.status-value {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1;
  display: block;
}

.status-label {
  font-size: 14px;
  opacity: 0.95;
  font-weight: 500;
  display: block;
  line-height: 1;
}

/* 统计卡片 */
.stats-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;
  margin-top: 0;
}

.stats-left, .stats-right {
  text-align: center;
  flex: 1;
}

.stats-number {
  font-size: 32px;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 8px;
}

.stats-label {
  font-size: 14px;
  color: #374151;
  font-weight: 500;
  line-height: 1.4;
}

.stats-divider {
  width: 1px;
  height: 50px;
  background: #e5e7eb;
  margin: 0 20px;
}

/* 右上模块：注意事项 */
.notice-module {
  padding: 20px;
}

.notice-module h3 {
  margin: 0 0 16px 0;
  color: #1f2937;
  font-size: 18px;
  font-weight: 600;
}

.notice-module p {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.6;
}

/* 左下模块：用户数据分析 */
.analysis-module {
  padding: 20px;
}

.analysis-module h3 {
  margin: 0 0 16px 0;
  color: #1f2937;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
}

.analysis-module p {
  margin: 0;
  color: #6b7280;
  font-size: 16px;
}

/* 右下模块：地图区域 */
.map-module {
  padding: 20px;
}

.map-module h3 {
  margin: 0 0 16px 0;
  color: #1f2937;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}

.map-container {
  flex: 1;
  position: relative;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  min-height: 200px;
}

.map-content {
  position: relative;
  height: 100%;
  width: 100%;
  background: #f8fafc;
}

/* 地图标记样式 */
.center-marker {
  background: transparent !important;
  border: none !important;
}

.center-circle {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4f46e5, #3730a3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  border: 3px solid white;
}

.paper-plane {
  font-size: 20px;
  color: white;
}

.dest-marker {
  background: transparent !important;
  border: none !important;
}

.dest-point {
  width: 12px;
  height: 12px;
  background: #ef4444;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.5);
  border: 2px solid white;
}

.map-center-point {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.center-label {
  background: #4f46e5;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  white-space: nowrap;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.2);
  text-align: center;
}

/* 目标点 */
.destination-points {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Allow clicks to pass through to the map */
}

.dest-point:nth-child(1) { transform: translate(calc(20% - 5px), calc(30% - 5px)); }
.dest-point:nth-child(2) { transform: translate(calc(15% - 5px), calc(25% - 5px)); }
.dest-point:nth-child(3) { transform: translate(calc(25% - 5px), calc(20% - 5px)); }
.dest-point:nth-child(4) { transform: translate(calc(35% - 5px), calc(35% - 5px)); }
.dest-point:nth-child(5) { transform: translate(calc(45% - 5px), calc(40% - 5px)); }
.dest-point:nth-child(6) { transform: translate(calc(55% - 5px), calc(35% - 5px)); }
.dest-point:nth-child(7) { transform: translate(calc(65% - 5px), calc(30% - 5px)); }
.dest-point:nth-child(8) { transform: translate(calc(75% - 5px), calc(25% - 5px)); }
.dest-point:nth-child(9) { transform: translate(calc(85% - 5px), calc(35% - 5px)); }
.dest-point:nth-child(10) { transform: translate(calc(10% - 5px), calc(60% - 5px)); }
.dest-point:nth-child(11) { transform: translate(calc(90% - 5px), calc(60% - 5px)); }

/* 连接线 */
.map-connections {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.connection-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background: #3b82f6;
  transform-origin: 0 0;
  opacity: 0.6;
}

.connection-line:nth-child(1) {
  width: 30%;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) rotate(-30deg);
}

.connection-line:nth-child(2) {
  width: 35%;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

.connection-line:nth-child(3) {
  width: 25%;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) rotate(-60deg);
}

.connection-line:nth-child(4) {
  width: 15%;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) rotate(-15deg);
}

.connection-line:nth-child(5) {
  width: 5%;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) rotate(0deg);
}

.connection-line:nth-child(6) {
  width: 15%;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) rotate(15deg);
}

.connection-line:nth-child(7) {
  width: 25%;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) rotate(30deg);
}

.connection-line:nth-child(8) {
  width: 35%;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.connection-line:nth-child(9) {
  width: 40%;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) rotate(60deg);
}

/* 目标点 */
.destination-points {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Allow clicks to pass through to the map */
}

.dest-point:nth-child(1) { transform: translate(calc(20% - 5px), calc(30% - 5px)); }
.dest-point:nth-child(2) { transform: translate(calc(15% - 5px), calc(25% - 5px)); }
.dest-point:nth-child(3) { transform: translate(calc(25% - 5px), calc(20% - 5px)); }
.dest-point:nth-child(4) { transform: translate(calc(35% - 5px), calc(35% - 5px)); }
.dest-point:nth-child(5) { transform: translate(calc(45% - 5px), calc(40% - 5px)); }
.dest-point:nth-child(6) { transform: translate(calc(55% - 5px), calc(35% - 5px)); }
.dest-point:nth-child(7) { transform: translate(calc(65% - 5px), calc(30% - 5px)); }
.dest-point:nth-child(8) { transform: translate(calc(75% - 5px), calc(25% - 5px)); }
.dest-point:nth-child(9) { transform: translate(calc(85% - 5px), calc(35% - 5px)); }
.dest-point:nth-child(10) { transform: translate(calc(10% - 5px), calc(60% - 5px)); }
.dest-point:nth-child(11) { transform: translate(calc(90% - 5px), calc(60% - 5px)); }

/* 连接点 */
.connection-points {
  position: absolute;
  width: 100%;
  height: 100%;
}

.point {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  background: #4f46e5;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2);
}

.point:nth-child(1) { transform: translate(calc(-50% + 80px), -50%); }
.point:nth-child(2) { transform: translate(calc(-50% + 70px), calc(-50% - 70px)); }
.point:nth-child(3) { transform: translate(-50%, calc(-50% - 70px)); }
.point:nth-child(4) { transform: translate(calc(-50% - 70px), calc(-50% - 70px)); }
.point:nth-child(5) { transform: translate(calc(-50% - 85px), -50%); }
.point:nth-child(6) { transform: translate(calc(-50% - 70px), calc(-50% + 70px)); }
.point:nth-child(7) { transform: translate(-50%, calc(-50% + 75px)); }
.point:nth-child(8) { transform: translate(calc(-50% + 70px), calc(-50% + 70px)); }

.point::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: #4f46e5;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.8);
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
  }
}

.map-controls {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.zoom-btn {
  width: 32px;
  height: 32px;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.zoom-btn:hover {
  background: #f9fafb;
  border-color: #9ca3af;
  transform: scale(1.05);
}

.zoom-btn:active {
  transform: scale(0.95);
}

/* 信号波形图标 */
.signal-wave {
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 32px;
  height: 24px;
  background: 
    linear-gradient(90deg, #3b82f6 0%, #3b82f6 20%, transparent 20%, transparent 25%),
    linear-gradient(90deg, #3b82f6 0%, #3b82f6 40%, transparent 40%, transparent 45%),
    linear-gradient(90deg, #3b82f6 0%, #3b82f6 60%, transparent 60%, transparent 65%),
    linear-gradient(90deg, #3b82f6 0%, #3b82f6 80%, transparent 80%, transparent 85%);
  background-size: 8px 6px, 8px 8px, 8px 10px, 8px 12px;
  background-repeat: no-repeat;
  background-position: 
    0px 18px,
    8px 16px,
    16px 14px,
    24px 12px;
  opacity: 0.7;
  pointer-events: none;
  z-index: 5;
}

/* 装饰性波浪线 */
.wave-decoration {
  position: absolute;
  bottom: 8px;
  left: 8px;
  width: 24px;
  height: 16px;
  background: linear-gradient(45deg, transparent 33.333%, #4f46e5 33.333%, #4f46e5 66.667%, transparent 66.667%);
  background-size: 6px 6px;
  opacity: 0.3;
  border-radius: 2px;
}

/* 装饰性网格图案 */
.grid-decoration {
  position: absolute;
  bottom: 8px;
  left: 8px;
  width: 40px;
  height: 40px;
  background-image:
    linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px);
  background-size: 8px 8px;
  opacity: 0.6;
  pointer-events: none;
  border-radius: 4px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    height: auto;
    gap: 16px;
  }
  
  .account-info {
    flex-direction: column;
    gap: 16px;
  }
  
  .account-item {
    min-width: auto;
    width: 100%;
  }
}
</style>
