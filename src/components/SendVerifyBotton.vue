<template>
  <van-button
    :disabled="countDownStatus"
    :phone="props.phone"
    plain
    type="primary"
    @click="sendVerificationCode"
    >{{ countDownText }}
  </van-button>
</template>

<script setup>
import { ref } from "vue";
import { showSuccessToast } from "vant";
import { sendVerifyCode } from "../api/user";
import { useCountDown } from "@vant/use";
const props = defineProps({
  phone: {
    type: String,
    required: true,
  },
});
const countDownText = ref("获取验证码");
const countDownStatus = ref(false);
const countDown = useCountDown({
  time: 60 * 1000,
  onFinish() {
    countDownStatus.value = false;
    countDownText.value = "获取验证码";
  },
  onChange(current) {
    countDownText.value = `重新发送(${current.seconds}s)`;
  },
});

async function sendVerificationCode() {
  // 模拟发送验证码操作
  // console.log("发送验证码", props.phone);
  const sendSuccess = await sendVerifyCode({ phone: props.phone });
  if (sendSuccess) {
    // 发送成功，显示提示信息并开始倒计时
    startCountDown();
    showSuccessToast("验证码发送成功");
  } else {
    // 发送失败，显示提示信息
    showFailToast("验证码发送失败");
  }
}

function startCountDown() {
  // 开始倒计时
  countDown.start();
  countDownStatus.value = true;
}
</script>
