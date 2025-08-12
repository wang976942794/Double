<template>
  <div class="sms-batch">
    <!-- 顶部：批量发送消息 -->
    <div class="batch-send-section">
      <h2 class="section-title">批量发送消息</h2>
      
      <div class="input-container">
        <!-- 左侧：手机号码输入 -->
        <div class="input-group">
          <textarea 
            class="input-textarea" 
            placeholder="输入号码，一行一个，最少20个"
            rows="8"
          ></textarea>
        </div>
        
        <!-- 中间：话术输入 -->
        <div class="input-group">
          <textarea 
            class="input-textarea" 
            placeholder="输入话术，一行一个，最少20个"
            rows="8"
          ></textarea>
        </div>
        
        <!-- 右侧：国家选择和确认按钮 -->
        <div class="right-controls">
          <div class="input-group">
            <select class="country-select">
              <option value="usa">USA(美国)</option>
              <option value="china">China(中国)</option>
              <option value="japan">Japan(日本)</option>
              <option value="korea">Korea(韩国)</option>
              <option value="uk">UK(英国)</option>
            </select>
          </div>
         
        </div>
        <button class="confirm-btn">确认</button>
      </div>
    </div>
    
    <!-- 底部：批量发送历史记录 -->
    <div class="batch-history-section">
      <h2 class="section-title">批量发送历史记录</h2>
      
      <div class="history-controls">
        <button class="refresh-btn">刷新历史记录</button>
      </div>
      
      <!-- 历史记录表格 -->
      <div class="history-table">
        <table>
          <thead>
            <tr>
              <th>批量Id</th>
              <th>发送方手机号</th>
              <th>接收方手机号</th>
              <th>发送时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="5" class="no-data">暂无数据</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- 分页控件 -->
      <div class="pagination">
        <div class="pagination-left">
          <button class="page-btn"><<</button>
          <button class="page-btn"><</button>
          <button class="page-btn active">1</button>
          <button class="page-btn">></button>
          <button class="page-btn">>></button>
        </div>
        
        <div class="pagination-center">
          <span>前往</span>
          <input type="number" class="page-input" value="1" min="1">
          <span>页</span>
        </div>
        
        <div class="pagination-right">
          <select class="page-size-select">
            <option>10条/页</option>
          </select>
          <span class="total-records">共0条记录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmsBatch'
}
</script>

<style scoped>
.sms-batch {
  padding: 24px;
  background: #f8f9fa;
  min-height: 100%;
}

/* 通用样式 */
.section-title {
  font-size: 12px;
  font-weight: 600;
  color: #1f2937;
}

/* 顶部：批量发送消息 */
.batch-send-section {
  width: 100%;
  height: 150px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  margin-bottom: 24px;
}

.input-container {
  /* width: 100%; */
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: start;
}



.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.input-textarea {
  width: 298px;
  height: 58px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
  resize: vertical;
  font-family: inherit;
  box-sizing: border-box;
}

.input-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.right-controls {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 180px;
  flex-shrink: 0;
}

.country-select {
  width: 100%;
  height: 58px;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  transition: border-color 0.2s;
  box-sizing: border-box;
  height: 48px;
}

.country-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.country-select:hover {
  border-color: #9ca3af;
}

.confirm-btn {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  box-sizing: border-box;
  height: 48px;
}

.confirm-btn:hover {
  background: #2563eb;
}

/* 底部：批量发送历史记录 */
.batch-history-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.history-controls {
  margin-top: 20px;
  margin-bottom: 20px;
}

.refresh-btn {
  padding: 8px 16px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  border: 1px solid #dcdfe6;
}

.refresh-btn:hover {
  color: #3b82f6;
}

/* 历史记录表格 */
.history-table {
  margin-bottom: 20px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

th {
  background: #f9fafb;
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

td {
  padding: 12px;
  border-bottom: 1px solid #f3f4f6;
  font-size: 14px;
  color: #6b7280;
}

.no-data {
  text-align: center;
  color: #9ca3af;
  font-style: italic;
}

/* 分页控件 */
.pagination {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  padding: 20px 0;
  border-top: 1px solid #e5e7eb;
}

.pagination-left {
  display: flex;
  gap: 8px;
}

.page-btn {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  background: white;
  color: #374151;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.page-btn:hover {
  border-color: #9ca3af;
  background: #f9fafb;
}

.page-btn.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.pagination-center {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
}

.page-input {
  width: 50px;
  padding: 6px 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
}

.page-input:focus {
  outline: none;
  border-color: #3b82f6;
}

.pagination-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.page-size-select {
  padding: 6px 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 14px;
  background: white;
}

.total-records {
  font-size: 14px;
  color: #6b7280;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .input-container {
    flex-direction: column;
    gap: 20px;
  }
  
  .right-controls {
    min-width: auto;
  }
  
  .pagination {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
}
</style>
