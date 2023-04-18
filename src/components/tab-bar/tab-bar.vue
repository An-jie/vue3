<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path" icom="home-o">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>

    <!-- <template v-for="(item, index) in tabbarData">
        <div 
            class="tab-bar-item" 
            :class="{active: currentIndex === index}"
            @click="itemClick(index, item)"
          >
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
            <span ve class="text">{{ item.text }}</span>
        </div> 
    </template> -->
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import tabbarData from "@/assets/data/tabbar.js"
  import { getAssetURL } from "@/utils/load_assets.js"
  import { useRouter } from "vue-router";

  // 点击进行变量位置的记录
  const currentIndex = ref(0)
  // const router = useRouter()
  // const itemClick = (index, item) => {
  //   currentIndex.value = index
  //   router.push(item.path)
  // }
</script>

<style lang="less" scoped>
  .tab-bar{
    // 局部修改：局部定义一个只针对.tab-bar 子元素才生效
    // --van-tabbar-background-color: 30px !important;

  // 找到类，对类中的css属性重写
  // :deep(.class) 找到子组件的类，让子组件的类也可以生效
    :deep(.van-tabbar-item__icon) {
      font-size: 50px;
    }

    img {
      height: 28px;
    }
  }
</style>
