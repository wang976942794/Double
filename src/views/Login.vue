<template>
  <div class="login-page">
    <!-- 顶部标题 -->
    <div class="login-header">
      <h1 class="main-title">Double usa sms</h1>
    </div>
    
    <!-- 登录卡片 -->
    <div class="login-card">
      <!-- 标签页 -->
      <div class="login-tabs">
        <div 
          class="tab-item" 
          :class="{ active: activeTab === 'login' }"
          @click="activeTab = 'login'"
        >
          登录
        </div>
        <div 
          class="tab-item" 
          :class="{ active: activeTab === 'register' }"
          @click="activeTab = 'register'"
        >
          创建新账号
        </div>
      </div>
      
      <!-- 登录表单 -->
      <div v-if="activeTab === 'login'" class="login-form">
        <div class="form-group">
          <label class="form-label">电话</label>
          <input 
            type="tel" 
            class="form-input" 
            placeholder="请输入电话号码"
            v-model="loginForm.phone"
          />
        </div>
        
        <div class="form-group">
          <label class="form-label">密码</label>
          <input 
            type="password" 
            class="form-input" 
            placeholder="请输入密码"
            v-model="loginForm.password"
          />
        </div>
        
        <button class="login-btn" @click="handleLogin">登录</button>
      </div>
      
      <!-- 注册表单 -->
      <div v-if="activeTab === 'register'" class="register-form">
        <div class="form-group">
          <label class="form-label">证件号</label>
          <input 
            type="text" 
            class="form-input" 
            placeholder="请输入证件号"
            v-model="registerForm.idNumber"
          />
        </div>
        
        <div class="form-group">
          <label class="form-label">用户名</label>
          <input 
            type="text" 
            class="form-input" 
            placeholder="请输入用户名"
            v-model="registerForm.username"
          />
        </div>
        
        <div class="form-group">
          <label class="form-label">邮箱账号</label>
          <input 
            type="email" 
            class="form-input" 
            placeholder="请输入邮箱账号"
            v-model="registerForm.email"
          />
        </div>
        
        <button class="login-btn" @click="handleRegister">创建账号</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      activeTab: 'login',
      loginForm: {
        phone: '',
        password: ''
      },
      registerForm: {
        phone: '',
        password: '',
        confirmPassword: '',
        idNumber: '',
        username: '',
        email: ''
      }
    }
  },
  methods: {
    handleLogin() {
      if (!this.loginForm.phone || !this.loginForm.password) {
        alert('请填写完整的登录信息');
        return;
      }
      
      // 这里添加登录逻辑
      console.log('登录信息:', this.loginForm);
      
      // 模拟登录成功，跳转到Dashboard
      this.$router.push('/dashboard');
    },
    
    handleRegister() {
      if (!this.registerForm.idNumber || !this.registerForm.username || !this.registerForm.email) {
        alert('请填写完整的注册信息');
        return;
      }
      
      // 这里添加注册逻辑
      console.log('注册信息:', this.registerForm);
      
      // 注册成功后切换到登录标签
      this.activeTab = 'login';
      this.registerForm = {
        phone: '',
        password: '',
        confirmPassword: '',
        idNumber: '',
        username: '',
        email: ''
      };
      alert('注册成功，请登录');
    }
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
}

/* 顶部标题 */
.login-header {
  margin-bottom: 40px;
  text-align: center;
}

.main-title {
  font-size: 48px;
  font-weight: 700;
  color: #3b82f6;
  margin: 0;
  letter-spacing: 1px;
}

/* 登录卡片 */
.login-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}

/* 标签页 */
.login-tabs {
  display: flex;
  margin-bottom: 32px;
  border-bottom: 1px solid #e5e7eb;
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: 16px 0;
  font-size: 16px;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.tab-item:hover {
  color: #374151;
}

.tab-item.active {
  color: #3b82f6;
}

.tab-item.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #3b82f6;
  border-radius: 1px;
}

/* 表单样式 */
.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #3b82f6;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #93c5fd;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input::placeholder {
  color: #9ca3af;
}

/* 登录按钮 */
.login-btn {
  width: 100%;
  padding: 14px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.login-btn:hover {
  background: #2563eb;
}

.login-btn:active {
  transform: translateY(1px);
}

/* 响应式设计 */
@media (max-width: 480px) {
  .login-page {
    padding: 40px 16px;
  }
  
  .login-card {
    padding: 24px;
  }
  
  .main-title {
    font-size: 36px;
  }
}
</style>
