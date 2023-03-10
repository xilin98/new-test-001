<template>
  <div class="newShopSwapper">
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="goBack"
      title="编辑商户信息"
    >
    </van-nav-bar>
    <van-form>
      <van-field
        v-model="form.username"
        label="商户名称"
        placeholder="请输入商户名称"
        :rules="rules.username"
      />

      <van-field
        v-model="form.phone"
        type="phone"
        label="电话号码"
        placeholder="请输入电话号码"
        :rules="rules.phone"
      />
      <van-field
        v-model="result"
        is-link
        readonly
        name="area"
        label="地区选择"
        placeholder="点击选择省市区"
        @click="showArea = true"
      />
      <van-popup v-model:show="showArea" position="bottom">
        <van-area
          :area-list="areaList"
          @confirm="onConfirm"
          @cancel="showArea = false"
        />
      </van-popup>
      <van-cell title="点我定位" is-link @click="showMapHandler" />
      <van-popup v-model:show="showMap" :style="{ padding: '64px' }">
      </van-popup>
      <van-field
        v-model="form.adress"
        type="adress"
        label="详细地址"
        placeholder="请输入详细地址"
        :rules="rules.adress"
      />

      <van-field
        v-model="form.status"
        type="status"
        label="营业状态"
        placeholder="请输入营业状态"
        :rules="rules.status"
        label-align="top"
      >
        <template #input>
          <van-radio-group v-model="status" direction="horizontal">
            <van-radio name="0">正常营业</van-radio>
            <van-radio name="1">即将开业</van-radio>
            <van-radio name="2">暂停营业</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="form.brandId" label="品牌ID" placeholder="选填" />
      <div class="button">
        <van-button type="primary" block @click="register"> 提交 </van-button>
        <van-button block @click="register" border> 取消 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { areaList } from "@vant/area-data";
const status = ref("0");
const router = useRouter();
const showMap = ref(false);
const form = ref({
  username: "",
  adress: "",
  phone: "",
  lat: "",
  lng: "",
});
// 表单验证规则
const rules = ref({
  username: [{ required: true, message: "用户名不能为空" }],
  phone: [{ required: true, message: "电话号码不能为空" }],
  lat: [{ required: true, message: "纬度不能为空" }],
  lng: [{ required: true, message: "经度不能为空" }],
});

const goBack = () => {
  // 返回上一页
  router.back();
};

const register = () => {
  // 提交表单逻辑，这里可以使用 axios 或者 fetch 等方法发送请求
  console.log(form.value);
};
const showMapHandler = () => {
  showMap.value = true;
};
const result = ref("");
const showArea = ref(false);
const onConfirm = ({ selectedOptions }) => {
  showArea.value = false;
  result.value = selectedOptions.map((item) => item.text).join("/");
};
</script>

<style scoped>
.button {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.button .van-button {
  width: 45%;
}
.newShopSwapper {
  padding: 20px;
}

.top {
  width: 100%;
}
</style>
