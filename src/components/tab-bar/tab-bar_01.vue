<!-- 3.基本结构先完成，后面在想 -->
<template>
  <div class="tab-bar">
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_home.png" alt="">
      <span>首页</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_favor.png" alt="">
      <span>收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_order.png" alt="">
      <span>订单</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_message.png" alt="">
      <span>消息</span>
    </div>
  </div>
</template>

<script setup>
  
</script>

<style lang="less" scoped>
  .tab-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    
    border-top: 1px solid #f3f3f3;
  }
  
  img{
    width: 36px;
  }

  .tab-bar-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text {
    font-size: 12px;
    margin-top: 2px;
  }
</style>
