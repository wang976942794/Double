<script>
import Layout from './components/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout
  },
  computed: {
    showLayout() {
      // 登录页面不显示Layout，其他页面显示Layout
      return this.$route.path !== '/'
    }
  }
}
</script>

<template>
  <div id="app">
    <router-view v-if="!showLayout" />
    <Layout v-else />
  </div>
</template>

<style>
#app {
  font-family: 'Arial', sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
