<template>
  <aside class="sidebar" :class="{ collapsed: isCollapsed }">
    <nav class="sidebar-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link" active-class="active">
            <span class="nav-icon"> <i class="fa-solid fa-tv"></i></span>
            <span class="nav-text">首页</span>
          </router-link>
        </li>
        
        <li class="nav-item">
          <div class="nav-link" @click="toggleSmsMenu">
            <span class="nav-icon"> <i class="fa-solid fa-message"></i></span>
            <span class="nav-text">短信</span>
            <span class="expand-arrow" :class="{ expanded: smsMenuExpanded }">▼</span>
          </div>
          <ul class="sub-menu" :class="{ expanded: smsMenuExpanded }">
            <li class="sub-item">
              <router-link to="/sms-chat" class="sub-link" active-class="active">
                短信聊天
              </router-link>
            </li>
            <li class="sub-item">
              <router-link to="/sms-batch" class="sub-link" active-class="active">
                短信批量发送
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      smsMenuExpanded: true
    }
  },
  methods: {
    toggleSmsMenu() {
      this.smsMenuExpanded = !this.smsMenuExpanded
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: rgb(236, 240, 241);
  color: #000;
  transition: width 0.3s ease;
  overflow: hidden;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar-nav {
  padding: 20px 0;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-bottom: 5px;
}

.nav-link {
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.nav-link:hover {
  background-color: rgb(21, 78, 193, 0.2);
  color: #fff;
}

.nav-link.active {
  background-color: rgb(21, 78, 193);
  color: #fff;
}

.nav-icon {
  font-size: 18px;
  margin-right: 12px;
  min-width: 20px;
}

.nav-text {
  font-size: 14px;
  font-weight: 500;
}

.expand-arrow {
  margin-left: auto;
  font-size: 10px;
  transition: transform 0.2s;
}

.expand-arrow.expanded {
  transform: rotate(180deg);
}

.sub-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.sub-menu.expanded {
  max-height: 100px;
}

.sub-item {
  margin: 0;
}

.sub-link {
  display: block;
  padding: 10px 20px 10px 52px;
  color: #000;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.2s;
}

.sub-link:hover {
  background-color: rgb(21, 78, 193, 0.2);
  color: #000;
}

.sub-link.active {
  background-color: rgb(21, 78, 193);
  color: #fff;
}

.collapsed .nav-text,
.collapsed .expand-arrow,
.collapsed .sub-menu {
  display: none;
}

.collapsed .nav-link {
  justify-content: center;
  padding: 12px 0;
}

.collapsed .nav-icon {
  margin-right: 0;
}
</style>
