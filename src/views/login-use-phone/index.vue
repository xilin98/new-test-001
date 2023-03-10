<template>
  <div class="container">
    <div class="login-form">
      <van-nav-bar title="YexSys" class="page-nav-bar"></van-nav-bar>
      <van-form @submit="onSubmit">
        <van-field
          name="电话号码"
          placeholder="请输入手机号"
          left-icon="phone"
          v-model="phone"
          :rules="userFormRules.phone"
        />
        <div class="twoBtn">
          <van-button type="primary" block class="vertifyBtn" plain
            >发送验证码</van-button
          >
          <van-field
            type="number"
            name="验证码"
            placeholder="请输入验证码"
            left-icon="smile-comment-o"
            v-model="vertifyCode"
            :rules="userFormRules.vertifyCode"
          />
        </div>
        <van-cell title="使用密码登录" is-link to="/login" />
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
import router from "../../router";
const store = useStore();

const userLoginInfo = reactive({
  username: "",
  password: "",
});

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
  Toast.loading({
    message: "登录中...",
    forbidClick: true,
  });
  const { data } = await login(user);
  if (data.code === 200) {
    store.commit("setUser", res.data);
    Toast.success("用户登录成功");
    router.push("/");
  } else {
    Toast.fail("用户名或密码错误");
  }
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
.twoBtn {
  display: flex;
  justify-content: space-between;
}
.vertifyBtn {
  margin-right: 10px;
  width: 70%;
  height: 35px;
}
</style>
