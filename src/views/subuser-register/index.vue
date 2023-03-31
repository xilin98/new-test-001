<template>
  <div>
    <van-nav-bar title="YexSys"></van-nav-bar>
    <van-form>
      <van-field
        v-model="phone"
        type="phone"
        label="电话号码"
        placeholder="请输入电话号码"
        :rules="rules.phone"
      />
      <div flex>
        <SendVerifyBotton :phone="phone" w-14></SendVerifyBotton>
        <van-field
          type="number"
          name="验证码"
          placeholder="请输入验证码"
          v-model="verify"
        />
      </div>
      <van-button type="primary" block @click="registerHandler" m-t-2>
        注册子账号
      </van-button>
    </van-form>
  </div>
</template>

<script setup>

import { showLoadingToast, showSuccessToast } from "vant";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { registerSub } from "../../api/user";
import SendVerifyBotton from "../../components/SendVerifyBotton.vue";

const router = useRouter();
const phone = ref("");
const verify = ref("");
// 表单验证规则
const rules = ref({
  phone: [
    {
      required: true,
      message: "电话号码不能为空",
    },
  ],
});
const registerHandler = async () => {
  showLoadingToast(
    {
      message: "注册中...",
      forbidClick: true,
    },
    1000
  );
  const registerSuccess = await registerSub({
    phone: phone.value,
    verify: verify.value,
  });
  if (registerSuccess) {
    showSuccessToast("注册成功");
    router.push("/");
  } else {
    showLoadingToast("注册失败，请重试");
  }
};

</script>
