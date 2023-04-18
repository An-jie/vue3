<template>
  <div class="app">
    <router-view></router-view>
    <!-- 跳转路由 -->
    <!-- <tab-bar v-if="!route.meta.hideTabbBar"/>   -->
    <tab-bar/>  

  </div>
</template>


<script setup>
  import tabBar from './components/tab-bar/tab-bar.vue';
  // import { useRoute } from 'vue-router';
  // const route = useRoute()

</script>


<style scoped>

</style>
