<template>
  <van-nav-bar title="首页"> </van-nav-bar>
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    input-align="center"
  />
  <van-grid>
    <van-grid-item icon="cluster-o" text="POI 管理" to="/poi" />
    <van-grid-item icon="friends-o" text="子账号管理" to="/subAccount" />
    <van-grid-item icon="certificate" text="Listing 管理" to="/listing" />
  </van-grid>
</template>

<script setup></script>

<style>
.homeNav {
  background: var(--main-color);
}
.search-bar {
  width: 100%;
  height: 40px;
  margin: 0 auto;
  background: var(--main-color);
}
</style>
