<template>
  <header class="top-header">
    <div class="header-left">
      <button class="menu-btn" @click="toggleSidebar">
        <span class="hamburger"></span>
      </button>
      <h1 class="logo">Double usa sms</h1>
    </div>
    
    <div class="header-right">
      <button class="action-btn charge-btn">批量发送收费,回复发送收费</button>
      
      <div class="header-icons">
        <button class="icon-btn">
          <i class="fa-solid fa-globe"></i>
        </button>
        <button class="icon-btn">
          <i class="fa-solid fa-user"></i>
        </button>
        <button class="icon-btn">
          <span class="flag">🇨🇳</span>
        </button>
        <div class="user-info" @click="toggleUserMenu">
          <span class="username">ZC5824021</span>
          <span class="dropdown" :class="{ 'rotated': showUserMenu }">▼</span>
          
          <!-- 用户菜单悬浮窗 -->
          <div class="user-menu" v-if="showUserMenu">
            <div class="menu-item" @click="logout">
              <i class="fa-solid fa-sign-out-alt"></i>
              注销
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopHeader',
  data() {
    return {
      showUserMenu: false,
    };
  },
  mounted() {
    // 添加全局点击事件监听器
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    // 移除事件监听器
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleSidebar() {
      // 触发侧边栏切换事件
      this.$emit('toggle-sidebar')
    },
    toggleUserMenu() {
      this.showUserMenu = !this.showUserMenu;
    },
    logout() {
      // 处理注销逻辑
      console.log('Logging out...');
      this.showUserMenu = false; // 关闭菜单
      
      // 跳转回登录页面
      this.$router.push('/');
    },
    handleClickOutside(event) {
      // 如果点击的不是用户信息区域，则关闭菜单
      if (!this.$el.querySelector('.user-info').contains(event.target)) {
        this.showUserMenu = false;
      }
    }
  }
}
</script>

<style scoped>
.top-header {
  height: 70px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.menu-btn:hover {
  background-color: #e9ecef;
}

.hamburger {
  display: block;
  width: 20px;
  height: 2px;
  background-color: #333;
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: #333;
  left: 0;
}

.hamburger::before {
  top: -6px;
}

.hamburger::after {
  top: 6px;
}

.logo {
  font-size: 32px;
  font-weight: bolder;
  color: rgb(21, 78, 193);
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.action-btn {
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.action-btn:hover {
  background-color: #c82333;
}

.header-icons {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.icon-btn:hover {
  background-color: #e9ecef;
}

.icon-btn i {
  font-size: 16px;
  color: #374151;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background-color: white;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.2s;
  position: relative; /* Added for positioning user menu */
}

.user-info:hover {
  border-color: #3b82f6;
}

.flag {
  font-size: 16px;
}

.username {
  font-size: 14px;
  color: #374151;
  font-weight: 500;
}

.dropdown {
  font-size: 10px;
  color: #6b7280;
  transition: transform 0.2s ease;
}

.dropdown.rotated {
  transform: rotate(180deg);
}

/* 用户菜单悬浮窗 */
.user-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  z-index: 10;
  min-width: 150px;
  padding: 8px 0;
  margin-top: 5px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s;
  color: #374151;
  font-size: 14px;
}

.menu-item:hover {
  background-color: #f0f2f5;
}

.menu-item i {
  font-size: 14px;
  color: #dc3545;
}
</style>
