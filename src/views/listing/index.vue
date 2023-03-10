<template>
  <van-nav-bar title="Listing" left-text="返回" left-arrow @click-left="goBack">
    <template #right>
      <van-icon name="search" />
    </template>
  </van-nav-bar>
  <van-dropdown-menu>
    <van-dropdown-item v-model="value1" :options="option1" />
    <van-dropdown-item v-model="value2" :options="option2" />
  </van-dropdown-menu>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const value1 = ref(0);
const value2 = ref("a");
const option1 = [
  { text: "已受理", value: 0 },
  { text: "处理中", value: 1 },
];
const option2 = [
  { text: "默认排序", value: "a" },
  { text: "首字母排序", value: "b" },
];

const goBack = () => {
  router.go(-1);
};
</script>
