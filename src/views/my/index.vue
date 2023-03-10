<template>
  <van-nav-bar :title="name" />
  <van-image
    width="10rem"
    height="6rem"
    fit="cover"
    position="left"
    src="../../assets/shop.jpg"
  />

  <van-cell-group>
    <van-cell title="邮箱" value="foo@bar" />
    <van-cell title="手机号" value="12345678901" />
    <van-cell title="品牌名称" value="A品牌" />
  </van-cell-group>
  <van-cell is-link @click="showPopup" title="创建子账号二维码"
    ><van-icon name="qr"
  /></van-cell>
  <van-popup v-model:show="show" :style="{ padding: '64px' }"
    ><qr :url="url"></qr>
  </van-popup>
  <van-cell title="修改我的店铺信息" is-link to="/edit-user-info" />
  <van-cell title="退出登录" is-link @click="logout" />
</template>

<script setup>
import { ref } from "vue";
import qr from "../../components/qr.vue";

import { useRouter } from "vue-router";
const router = useRouter();
const name = "A 商铺";
const show = ref(false);
const showPopup = () => {
  show.value = true;
};
const url = "http://www.baidu.com";
const logout = () => {
  console.log("logout");
  router.push("/login");
};
</script>

<style scoped></style>
