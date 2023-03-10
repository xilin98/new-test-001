<template>
  <van-nav-bar
    title="POI 管理"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  >
    <template #right>
      <van-button
        icon="plus"
        type="primary"
        plain
        class="createBtn"
        @click="createPoi"
        >新建</van-button
      >
    </template>
  </van-nav-bar>

  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    input-align="center"
  />
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <poi-item v-for="item in list" :key="item" :title="item" />
  </van-list>
  <van-back-top bottom="10vh" />
</template>

<script setup>
import { ref } from "vue";
import PoiItem from "./components/PoiItem.vue";
import { useRouter } from "vue-router";
import router from "../../router";

const onClickLeft = () => history.back();
const list = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};

const createPoi = () => {
  console.log("createPoi");
  router.push("/add-poi");
};
</script>

<style scoped>
.createBtn {
  height: 80%;
  border: none;
}
</style>
