<template>
  <van-nav-bar title="数据分析" />
  <van-tabs v-model:active="active" animated>
    <van-tab title="饼图">
      <CircleMap class="mapBox"></CircleMap>
    </van-tab>
    <van-tab title="折线图">
      <ComplexSmoothMap class="mapBox"></ComplexSmoothMap>
    </van-tab>
  </van-tabs>
  <ComplexSmoothMap class="mapBox"></ComplexSmoothMap>
</template>

<script setup>
import { ref } from "vue";
import CircleMap from "./Maps/CircleMap.vue";
import ComplexSmoothMap from "./Maps/ComplexSmoothLineMap.vue";
const maplist = ref([
  { name: "北京市", value: Math.floor(Math.random() * 300) },
  { name: "天津市", value: Math.floor(Math.random() * 300) },
  { name: "河北省", value: Math.floor(Math.random() * 300) },
  { name: "山西省", value: Math.floor(Math.random() * 300) },
  { name: "内蒙古自治区", value: Math.floor(Math.random() * 300) },
  { name: "辽宁省", value: Math.floor(Math.random() * 300) },
  { name: "吉林省", value: Math.floor(Math.random() * 300) },
  { name: "黑龙江省", value: Math.floor(Math.random() * 300) },
  { name: "上海市", value: Math.floor(Math.random() * 300) },
  { name: "江苏省", value: Math.floor(Math.random() * 300) },
  { name: "浙江省", value: Math.floor(Math.random() * 300) },
  { name: "安徽省", value: Math.floor(Math.random() * 300) },
  { name: "福建省", value: Math.floor(Math.random() * 300) },
  { name: "江西省", value: Math.floor(Math.random() * 300) },
  { name: "山东省", value: Math.floor(Math.random() * 300) },
  { name: "河南省", value: Math.floor(Math.random() * 300) },
  { name: "湖北省", value: Math.floor(Math.random() * 300) },
  { name: "湖南省", value: Math.floor(Math.random() * 300) },
  { name: "广东省", value: Math.floor(Math.random() * 300) },
  { name: "广西壮族自治区", value: Math.floor(Math.random() * 300) },
  { name: "海南省", value: Math.floor(Math.random() * 300) },
  { name: "重庆市", value: Math.floor(Math.random() * 300) },
  { name: "四川省", value: Math.floor(Math.random() * 300) },
  { name: "贵州省", value: Math.floor(Math.random() * 300) },
  { name: "云南省", value: Math.floor(Math.random() * 300) },
  { name: "西藏自治区", value: Math.floor(Math.random() * 300) },
  { name: "陕西省", value: Math.floor(Math.random() * 300) },
  { name: "甘肃省", value: Math.floor(Math.random() * 300) },
  { name: "青海省", value: Math.floor(Math.random() * 300) },
  { name: "宁夏回族自治区", value: Math.floor(Math.random() * 300) },
  { name: "新疆维吾尔自治区", value: Math.floor(Math.random() * 300) },
]);
const active = ref(0);
</script>

<style>
.mapBox {
  width: 10wh;
  height: 300px;
}
</style>
