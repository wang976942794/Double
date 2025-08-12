<template>
  <div class="sms-chat">
    <!-- 左列：标签页和对话列表 -->
    <div class="left-column">
      <!-- 顶部标签页 -->
      <div class="chat-tabs">
        <div class="tab" :class="{ active: activeTab === 'all' }" @click="switchTab('all')">全部</div>
        <div class="tab" :class="{ active: activeTab === 'unread' }" @click="switchTab('unread')">未读</div>
      </div>
      
      <!-- 对话列表区域 -->
      <div class="conversation-list">
        <div class="empty-conversations">暂未有对话</div>
      </div>
    </div>
    
    <!-- 右列：主聊天区域 -->
    <div class="right-column">
      <div class="chat-main">
        <div class="empty-chat">对话为空</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmsChat',
  data() {
    return {
      activeTab: 'all'
    }
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style scoped>
.sms-chat {
  display: flex;
  height: 100%;
  background: #f8f9fa;
}

/* 左列：标签页和对话列表 */
.left-column {
  width: 33.333%;
  background: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
}

/* 顶部标签页 */
.chat-tabs {
  display: flex;
  background: #e5e7eb;
  border-radius: 8px;
  margin: 16px 20px;
  padding: 4px;
  width: fit-content;
}

.tab {
  padding: 8px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  transition: all 0.2s ease;
  user-select: none;
  border-radius: 6px;
  white-space: nowrap;
}

.tab:hover {
  color: #374151;
}

.tab.active {
  background: #3b82f6;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* 对话列表区域 */
.conversation-list {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.empty-conversations {
  color: #6b7280;
  font-size: 16px;
  text-align: center;
}

/* 右列：主聊天区域 */
.right-column {
  width: 66.667%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-main {
  text-align: center;
}

.empty-chat {
  color: #9ca3af;
  font-size: 16px;
}
</style>
