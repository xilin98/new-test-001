<template>
  <van-sticky>
    <van-nav-bar
      title="Listing 管理"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
  </van-sticky>
  <filter-search></filter-search>

  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    >
      <van-collapse
        v-model="activePOIList" 
      >
      <listing-item 
        v-for="item in list" :item="item" :key="item.key" 
      >
    </listing-item>
    </van-collapse>
  </van-list>
  <van-back-top bottom="10vh" />


</template>

<script setup>
import { ref, computed } from "vue";
import { useState } from "../../store";
import FilterSearch from "../../components/FilterSearch.vue";
// import FilterSearch from "../../components/FilterSearch.vue";
import { fuseSearch } from "../../utils/search"

import { getPOI } from "../../api/poi";


import ListingItem from "./ListingItem.vue";
import { keywords } from "../../store"

const activePOIList = ref([])

const { POIList } = useState();

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

const onClickLeft = () => history.back();
</script>
