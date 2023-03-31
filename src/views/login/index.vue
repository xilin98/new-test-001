<template>
  <div class="container">
    <div>
      <van-nav-bar
        class="navbar"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        title="YexSys"
      ></van-nav-bar>
      <van-form @submit="onSubmit" class="form">
        <van-field
          name="username"
          placeholder="请输入用户名"
          left-icon="manager"
          v-model="username"
          :rules="userFormRules.username"
          class="input-field"
        />
        <van-field
          type="password"
          name="password"
          placeholder="请输入密码"
          left-icon="lock"
          v-model="password"
          class="input-field"
          :rules="userFormRules.password"
        />
        <van-cell title="使用手机验证码登录" is-link to="/login-use-phone" class="cell"/>
        <van-cell title="没有账号，去注册" is-link to="/register-use-phone" class="cell"/>
        <van-button block type="primary" native-type="submit" class="btn">
          登录
        </van-button>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { showFailToast, showLoadingToast, showSuccessToast } from "vant";
import { login } from "../../api/user";

const router = useRouter();
const username = ref("");
const password = ref("");

const userFormRules = {
  username: [{ required: true, message: "用户名不能为空" }],
  password: [
    { required: true, message: "密码不能为空" },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,}$/,
      message: "密码必须包含大小写字母和数字, 且长度不小于8位",
    },
  ],
};

const onSubmit = async () => {
  showLoadingToast({
    message: "登录中...",
    forbidClick: true,
  });

  const res = await login({
    username: username.value,
    password: password.value,
  });

  if (res) {
    showSuccessToast("登录成功");
    router.push("/");
  } else {
    showFailToast("登录失败,请检查用户名或密码后重试");
  }
};

const goBack = () => {
  router.go(-1);
};
</script>


<style scoped>
.container {
  height: 100vh;
  background-color: #262626;
}

.navbar {
  background-color: #262626 !important;
  color: white !important;
  box-shadow: none !important;
}

.form {
  margin-top: 2rem;
  width: 90%;
  max-width: 325px;
  border-radius: 8px;
  background-color: #eeeeee;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-field {
  width: 100%;
  margin: 0.5rem 0;
}

.cell {
  margin-top: 1rem;
  width: 100%;
}

.btn {
  margin-top: 1rem;
  background-color: #262626;
  border-color: #262626;
  color: white;
}

</style>
