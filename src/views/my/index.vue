<template>
  <van-nav-bar :title="name || 'YexSys'" />
  <van-image w-40 h-24 fit-cover position="left" src="/images/shop.png" />

  <van-cell-group>
    <van-cell title="邮箱" :value="email || '未设置'" />
    <van-cell title="手机号" :value="phone" />
    <van-cell title="品牌名称" :value="brandname" />
  </van-cell-group>
  <van-cell is-link @click="show = true" title="创建子账号二维码"
    ><van-icon name="qr"
  /></van-cell>
  <van-popup v-model:show="show" p-6>
    <qr-code-card :url="url"></qr-code-card>
  </van-popup>
  <van-cell title="退出登录" is-link @click="logoutHandler" />
</template>

<script setup>
import { ref } from "vue";
import QrCodeCard from "../../components/QrCodeCard.vue";
import { useRouter } from "vue-router";
import { logout } from "../../api/user";

import { useState } from "../../store";

const router = useRouter();
const {userInfo} = useState();
const email = ref(userInfo.value.email);
const phone = ref(userInfo.value.phone);
const brandname = ref(userInfo.value.brandname);
const name = ref(userInfo.value.name);
const show = ref(false);

const url =
  window.location.origin + `/#/register-sub/${userInfo.value.commandId}`;

const logoutHandler = () => {
  logout().then(() => {
    router.push("/login");
  });
};

</script>
