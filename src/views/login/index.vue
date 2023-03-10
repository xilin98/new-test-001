<template>
  <div class="container">
    <div class="login-form">
      <van-nav-bar title="YexSys" class="page-nav-bar"></van-nav-bar>
      <van-form @submit="onSubmit">
        <van-field
          name="username"
          placeholder="请输入用户名"
          left-icon="manager"
          v-model="username"
          :rules="userFormRules.username"
        />
        <van-field
          type="password"
          name="password"
          placeholder="请输入密码"
          left-icon="lock"
          v-model="password"
          :rules="userFormRules.password"
        />

        <van-cell title="使用电话号码登录" is-link to="/login-use-phone" />
        <div style="margin: 16px">
          <van-button block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { login } from "../../api/user";
import { Toast } from "vant";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
const store = useStore();
const router = useRouter();
const username = ref("");
const password = ref("");

const userFormRules = {
  username: [{ required: true, message: "请输入用户名" }],
  password: [
    { required: true, message: "请输入密码" },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,}$/,
      message: "密码必须包含大小写字母和数字, 且长度不小于8位",
    },
  ],
};

const onSubmit = async () => {
  // Toast.loading({
  //   message: "登录中...",
  //   forbidClick: true,
  // });
  // const { data } = await login(user);
  // if (data.code === 200) {
  //   store.commit("setUser", res.data);
  //   Toast.success("用户登录成功");
  //   router.push("/");
  // } else {
  //   Toast.fail("用户名或密码错误");
  // }
  router.push("/");
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.login-form {
  padding: 20px;
  width: 80%;
}
</style>
