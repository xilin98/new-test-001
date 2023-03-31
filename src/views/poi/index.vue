<template>
  <div>
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
        @click="createPoi"
        border-none
        >新建</van-button
      >
    </template>
    
  </van-nav-bar>
  <filter-search></filter-search>
  
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >

  <poi-item v-for="item in list" :key="item.username" :item="item" p-0.5>
  </poi-item>
  </van-list>


  
  <van-back-top bottom="10vh" />

  </div>
  
  
</template>

<script setup>
import { ref, computed } from "vue";
import { useState } from "../../store";
import { useRouter } from "vue-router";

import PoiItem from "./PoiItem.vue";
import FilterSearch from "../../components/FilterSearch.vue";

import { getPOI } from "../../api/poi";
import { fuseSearch } from "../../utils/search"
import { keywords } from "../../store"

const router = useRouter();
const {POIList} = useState();

const loading = ref(false);
const finished = ref(false);

const list = computed(() => {
  return fuseSearch({list: POIList.value, keywords:keywords.value }, );
});

const onLoad = async () => {
  loading.value = true;
  const getPOISuccess = await getPOI();
  if (getPOISuccess) {
    loading.value = false;
    finished.value = true;
  }
};


const createPoi = () => {
  console.log("createPoi");
  router.push("/add-poi");
};

const onClickLeft = () => history.back();
</script>
