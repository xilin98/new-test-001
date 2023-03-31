<template>
  <div w-full h-full>
    <van-nav-bar title="YexSys" class="page-nav-bar"></van-nav-bar>
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
      <van-cell title="使用密码登录" is-link to="/login" />
      <van-cell title="没有账号, 去注册" is-link to="/register-use-phone" />
      <van-button block type="primary" native-type="submit"> 登录 </van-button>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { login } from "../../api/user";
import { showFailToast, showLoadingToast, showSuccessToast } from "vant";
import { useRouter } from "vue-router";
import SendVerifyBotton from "../../components/SendVerifyBotton.vue";
const router = useRouter();

const phone = ref("");
const verify = ref("");

const userFormRules = {
  phone: [{ required: true, message: "电话号码不能为空" }],
  // verify: [{ required: true, message: "验证码不能为空" }],
};

const onSubmit = async () => {
  showLoadingToast({
    message: "登录中...",
    forbidClick: true,
  });
  const res = await login({ phone: phone.value, verify: verify.value });
  if (res) {
    showSuccessToast("用户登录成功");
    router.push("/");
  } else {
    showFailToast("登录失败");
  }
};
</script>
