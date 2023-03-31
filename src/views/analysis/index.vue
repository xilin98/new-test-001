<template>
  <van-nav-bar title="数据分析" />
  <van-tabs v-model:active="active" animated>
    <van-tab title="饼图">
      <CircleMap mapbox></CircleMap>
    </van-tab>
    <van-tab title="折线图">
      <ComplexSmoothMap mapbox></ComplexSmoothMap>
    </van-tab>
  </van-tabs>
</template>

<script setup>
import { ref } from 'vue'

import CircleMap from './Maps/CircleMap.vue'
import ComplexSmoothMap from './Maps/ComplexSmoothLineMap.vue'
const active = ref(0)
</script>
