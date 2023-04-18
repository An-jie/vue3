<template>
  <div class="city top-page">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置" 
        shape="round"
        show-action
        @cancel="cancelClick"
        />

        <!-- 2.tab的切换 -->
        <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
          <!-- 遍历对象：(value(里面的内容), key(属性名.键值), index(对应的索引)) -->
          <template v-for="(value, key ,item) in allCities" key="key">
            <van-tab :title="value.title" :name="key"></van-tab>
          </template>
        </van-tabs>
    </div>

    <div class="content">
      <!-- <city-group :groupData="cuurentGroup"/>
      <city-group :groupData="cuurentGroup"/> -->

      <template v-for="(value, key, index) in allCities">
        <!-- <h2 v-show="tabActive === key">{{ value.title }}</h2> -->
        <city-group v-show="tabActive === key" :group-data="value"/>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue"
  import { storeToRefs } from "pinia"
  import useCityStore from "@/stores/modules/city"
  import { useRouter } from "vue-router"
  // import { getCityAll } from '@/services'
  
  import cityGroup from "./city-group.vue"
  
  

  const router = useRouter()
  // 搜索框功能
  const searchValue = ref("")
  const cancelClick = () => {
    router.back()
  }


  // tab的切换
  const tabActive = ref()


  /**这个位置发送网络请求有两个缺点：
      1.如果网络请求太多，那么页面中的组件中就包含大量的对于网络请求和数据处理的逻辑
      2.如果页面封装了很多的子组件，子组件需要这些数据，我们必须一步步将数据传递过去(props)
  **/
  // 网络请求:请求网络数据
  // const allCity = ref({})
  // getCityAll().then(res => {
  //   allCity.value = res.data
  // })


  // 从Store 中获取数据
  const cityStore = useCityStore()
  cityStore.fetchAllCitiesData()
  const { allCities } = storeToRefs(cityStore)

  // 获取选中标签后的数据
  // 1.获取正确的key： ，将tabs 中绑定的tabAction 正确绑定
  // 2.根据key 从allCities 中获取数据，默认直接获取的数据不是响应式的，所以必须包裹 computed
  const cuurentGroup = computed(() => allCities.value[tabActive.value])
</script>

<style lang="less" scoped>
  .city{
    
    // 1.top固定定位
    // .top {
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    //   right: 0;
    // }

    // .content {
    //   margin-top: 98px;
    // }

    // 2.局部滚动
    .content{
      height: calc(100vh - 98px);
      overflow-y: auto;
    }
  }
</style>
