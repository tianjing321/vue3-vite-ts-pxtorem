<template>
  <el-container>
    <el-header>
      <Bar />
    </el-header>
    <el-main>
      <!-- 子路由出口 -->
      <router-view />
    </el-main>
  </el-container>
</template>
  
<script setup lang="ts">
import Bar from './header.vue'

</script>
  
<style scoped lang="scss">
.el-container {
  height: 100vh;
}

.el-header {
  width: calc(100vw);
  height: 128px;
  background-color: $main_bg;
  color: #ffffff
}

.el-main {
  width: calc(100vw);
  background-color: #E9EEF3;
  padding: 30px;
}
</style>
