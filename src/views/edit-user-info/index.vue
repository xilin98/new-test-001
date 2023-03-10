<template>
  <div class="register-page">
    <van-nav-bar left-text="返回" left-arrow @click-left="goBack">
      修改商铺信息
    </van-nav-bar>
    <van-form class="register-form">
      <van-field
        v-model="form.username"
        label="商铺名"
        placeholder="请输入商铺名"
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
        v-model="form.phone"
        type="phone"
        label="电话"
        placeholder="请输入电话号码"
        :rules="rules.phone"
      />

      <van-field v-model="form.brandId" label="品牌ID" placeholder="选填" />
      <div class="btnWrapper">
        <van-button type="primary" block @click="register"> 确认 </van-button>
        <van-button @click="goBack" block> 取消 </van-button>
      </div>
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
.btnWrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btnWrapper > button {
  width: 45%;
}
</style>
