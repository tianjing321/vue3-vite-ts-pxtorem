<script setup lang="ts">
import {ref} from 'vue'
const value1=ref(true)
</script>

<template>
  
  <div class="item">你好</div>
  <div class="bf">这是一块</div>
  <el-button type="primary" size="large">Primary</el-button>
  <el-switch type="primary"   size="large" v-model="value1" />
</template>

<style lang="scss" scoped>
@use './styles/public.scss';

.item{
  // background: $main_bg;
  // color: $main_clolr;
}
.bf{
  width: 200px;
  height: 200px;
  background: green;
}
</style>
