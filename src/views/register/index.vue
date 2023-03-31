<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="goBack"
      title="YexSys"
    >
      注册
    </van-nav-bar>
    <van-form>
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="rules.username"
      />

      <van-field
        v-model="phone"
        type="phone"
        label="电话号码"
        placeholder="请输入电话号码"
        :rules="rules.phone"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="rules.password"
      />

      <van-field
        v-model="confirmPassword"
        type="password"
        label="确认密码"
        placeholder="请再次输入密码"
        :rules="rules.confirmPassword"
      />

      <van-field
        v-model="email"
        type="email"
        label="邮箱"
        placeholder="请输入邮箱(选填)"
        :rules="rules.email"
      />

      <van-field v-model="brandId" label="品牌ID" placeholder="选填" />

      <div flex>
        <SendVerifyBotton :phone="phone" w-30></SendVerifyBotton>
        <van-field
          type="number"
          name="验证码"
          placeholder="请输入验证码"
          v-model="verify"
        />
      </div>

      <van-button type="primary" block @click="registerHandler" m-t-2>
        注册
      </van-button>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { register } from "../../api/user";
import { showFailToast, showLoadingToast, showSuccessToast } from "vant";
import SendVerifyBotton from "../../components/SendVerifyBotton.vue";
const router = useRouter();

const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const email = ref("");
const phone = ref("");
const brandId = ref("");
const verify = ref("");
// 表单验证规则
const rules = ref({
  username: [{ required: true, message: "用户名不能为空" }],
  email: [{ type: "email", message: "请输入正确的邮箱" }],
  password: [
    { required: true, message: "密码不能为空" },
    // 包含大小写字母，且长度大于8
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/,
      message: "密码必须包含大小写字母，且长度大于8",
    },
  ],
  confirmPassword: [
    { required: true, message: "请再次输入密码" },
    {
      validator: checkPassword,
      message: "两次输入的密码不一致",
    },
  ],
  phone: [
    {
      required: true,
      message: "电话号码不能为空",
    },
  ],
});

function checkPassword(value) {
  if (value !== password.value) {
    return "两次输入的密码不一致";
  }
  return true;
}

const goBack = () => {
  router.back();
};

const registerHandler = async () => {
  showLoadingToast({
    message: "注册中...",
    forbidClick: true,
  });
  const registerSuccess = await register({
    username: username.value,
    email: email.value,
    password: password.value,
    phone: phone.value,
    brandId: brandId.value,
    verify: verify.value,
  });
  if (registerSuccess) {
    showSuccessToast({
      message: "注册成功",
      forbidClick: true,
    });
    router.push("/");
  } else {
    showFailToast({
      message: "注册失败, 请检查信息后重试",
      forbidClick: true,
    });
  }
};
</script>
