<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="goBack"
      title="YexSys"
    ></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        name="电话号码"
        placeholder="请输入手机号"
        left-icon="phone"
        v-model="phone"
        :rules="userFormRules.phone"
      />
      <div flex>
        <van-field
          type="number"
          name="验证码"
          placeholder="请输入验证码"
          left-icon="smile-comment-o"
          v-model="verify"
        />
        <SendVerifyBotton :phone="phone" w-35 />
      </div>
      <van-cell title="注册并同时设置密码" is-link to="/register" />
      <van-button block type="primary" native-type="submit"> 注册 </van-button>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { registerUsePhone } from "../../api/user";
import { useRouter } from "vue-router";
import { showLoadingToast } from "vant";
import SendVerifyBotton from "../../components/SendVerifyBotton.vue";
const router = useRouter();
const phone = ref("");
const verify = ref("");

const userFormRules = {
  phone: [{ required: true, message: "手机号不能为空" }],
};

const onSubmit = async () => {
  showLoadingToast({
    message: "注册中...",
    forbidClick: true,
  });

  const registerSuccess = await registerUsePhone({
    phone: phone.value,
    verify: verify.value,
  });

  if (registerSuccess) {
    showLoadingToast("注册成功");
    router.push("/");
  } else {
    showLoadingToast("注册失败，请检查用户名和密码后重试");
  }
};

const goBack = () => {
  router.go(-1);
};
</script>
