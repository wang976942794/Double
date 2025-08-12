<template>
  <div class="layout">
    <!-- 顶部导航栏 -->
    <TopHeader @toggle-sidebar="toggleSidebar" />
    
    <div class="main-container">
      <!-- 左侧边栏 -->
      <Sidebar :is-collapsed="isSidebarCollapsed" />
      
      <!-- 主内容区域 -->
      <main class="content" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import TopHeader from './TopHeader.vue'
import Sidebar from './Sidebar.vue'

export default {
  name: 'Layout',
  components: {
    TopHeader,
    Sidebar
  },
  data() {
    return {
      isSidebarCollapsed: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed
    }
  }
}
</script>

<style scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
  overflow-y: auto;
  transition: all 0.3s ease;
}

.content.sidebar-collapsed {
  margin-left: 0;
}
</style>
