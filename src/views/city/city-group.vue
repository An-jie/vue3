<template>
  <div class="cityGroup">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">        
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <template v-for="(group, index) in groupData.cities" key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>

    <!-- 使用组件前 -->
    <!-- <template v-for="(group, index) in groupData.cities" :key="index">
      <h2 class="title">标题：{{ group.group }}</h2>
        <div class="list">
          <template v-for="(city, indey) in group.cities" key="indey">
            <div class="city">{{ city.cityName }}</div>
          </template>
        </div>
    </template> -->
  </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
import { list } from "postcss";
import { computed } from "vue"
import { useRouter } from "vue-router";

// 定义props
const props =  defineProps({
  groupData:{
    type:Object,
    default: () => ({})
  }
})

// 动态获取索引
// map() 是从groupData.cities 分离 group 的
const indexList = computed(() => {
  return props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list        
})

// 监听城市的点击
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  console.log(city);
  // 选中当前城市
  cityStore.currentCity = city
  // 返回上一级
  router.back()
}

</script>

<style lang="less" scoped>
  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    margin-right: 25px;
    .city{
      width: 70px;
      height: 28px;
      border-radius: 14px;
      font-size: 12px;
      color: #000;
      text-align: center;
      ;line-height: 28px;
      background-color: #fff4ec;
      margin: 7px 0;
    }
  }
</style>

