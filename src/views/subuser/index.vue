<template>
  <van-nav-bar left-text="返回" left-arrow @click-left="goBack" title="YexSys">
  </van-nav-bar>
  <van-cell-group v-for="item in subuserList" :key="item.phone">
    <div  card p-t-2 m-b-2>
    <van-cell title="用户名" :value="item.username" />
    <van-cell title="品牌名" :value="item.brandname" />
    <van-cell title="电话" :value="item.phone" />
    <van-cell title="邮箱" :value="item.email" />
    </div>
  </van-cell-group>
</template>

<script setup>
import { onMounted } from "vue";
import { subuserList } from "../../store";
import { getSubuser } from "../../api/subuser";

const init = async () =>{
  await getSubuser();
}

onMounted(() => {
  init();
})

const goBack = () => {
  window.history.go(-1);
};

</script>
