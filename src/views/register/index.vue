<template>
  <div class="register-page">
    <van-nav-bar left-text="返回" left-arrow @click-left="goBack">
      注册
    </van-nav-bar>
    <van-form class="register-form">
      <van-field
        v-model="form.username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="rules.username"
      />

      <van-field
        v-model="form.email"
        type="email"
        label="邮箱"
        placeholder="请输入邮箱"
        :rules="rules.email"
      />

      <van-field
        v-model="form.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="rules.password"
      />

      <van-field
        v-model="form.confirmPassword"
        type="password"
        label="确认密码"
        placeholder="请再次输入密码"
        :rules="rules.confirmPassword"
      />

      <van-field v-model="form.brandId" label="品牌ID" placeholder="选填" />

      <van-button type="primary" block round @click="register">
        注册
      </van-button>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const form = ref({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  brandId: "",
});

// 表单验证规则
const rules = ref({
  username: [{ required: true, message: "用户名不能为空" }],
  email: [
    { required: true, message: "邮箱不能为空" },
    { type: "email", message: "请输入正确的邮箱" },
  ],
  password: [
    { required: true, message: "请输入密码" },
    // 包含大小写字母，且长度大于8
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/,
      message: "密码必须包含大小写字母，且长度大于8",
    },
  ],
  confirmPassword: [
    { required: true, message: "请再次输入密码" },
    {
      validator: (rule, value) => {
        if (value !== form.password) {
          return "两次输入密码不一致";
        }
        return true;
      },
    },
  ],
});

const goBack = () => {
  // 返回上一页
  router.back();
};

const register = () => {
  // 提交表单逻辑，这里可以使用 axios 或者 fetch 等方法发送请求
  console.log(form.value);
};
</script>

<style scoped>
.register-form {
  margin: 20px;
  width: 80%;
}
</style>
