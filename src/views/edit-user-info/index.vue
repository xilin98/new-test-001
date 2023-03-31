<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="goBack">
      修改商铺信息
    </van-nav-bar>
    <van-form>
      <van-field
        v-model="email"
        type="email"
        label="邮箱"
        placeholder="请输入新邮箱"
        :rules="rules.email"
      />

      <van-field
        v-model="brandname"
        label="品牌名"
        placeholder="请输入新的品牌名"
        :rules="rules.brandname"
        v-if="userInfo.value.permission < 4"
      />

      <div flex>
        <van-button type="primary" block @click="onUpdate"> 确认 </van-button>
        <van-button @click="goBack" block> 取消 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useState } from "../../store";
import { useRouter } from "vue-router";

const router = useRouter();

const {updateUserInfo, userInfo } = useState();

const email = ref(userInfo.value.email);
const brandname = ref(userInfo.value.brandname);
const username = ref(userInfo.value.username);

// 表单验证规则
const rules = ref({
  email: [
    { required: true, message: "邮箱不能为空" },
    { type: "email", message: "请输入正确的邮箱" },
  ],
  brandname: {
    required: true,
    message: "品牌名不能为空",
  },
});

const goBack = () => {
  router.back();
};

const onUpdate = () => {
  updateUserInfo({
    brandname: brandname.value,
    email: email.value,
    username: username.value,
  });
};
</script>
