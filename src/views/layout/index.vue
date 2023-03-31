<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="chart-trending-o" to="/analysis"
        >数据分析</van-tabbar-item
      >
      <van-tabbar-item icon="contact" to="/my"> 我的 </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {} from "../../store";

const active = ref(0);
</script>
