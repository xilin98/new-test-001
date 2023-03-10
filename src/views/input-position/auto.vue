<template>
  <div>
    <van-button @click="showPopup" icon="position-o">获取当前位置</van-button>
    <van-button type="primary" plain class="editBtn">其他位置</van-button>
    <van-popup v-model:show="popupVisible" position="bottom">
      <div v-if="!loading">
        <div v-if="error">{{ error }}</div>
        <div v-else>
          <div>纬度: {{ position.latitude }}</div>
          <div>经度: {{ position.longitude }}</div>
        </div>
      </div>
      <div v-else>正在加载...</div>
    </van-popup>

    <van-field
      v-model="form.lat"
      type="lat"
      label="纬度"
      placeholder="请定位"
      disabled
    />

    <van-field
      v-model="form.lng"
      type="lng"
      label="经度"
      placeholder="请定位"
      disabled
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      error: "",
      position: null,
      popupVisible: false,
      form: {
        lat: "",
        lng: "",
      },
    };
  },
  methods: {
    showPopup() {
      this.loading = true;
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.loading = false;
          this.position = position.coords;
          this.popupVisible = true;
        },
        (error) => {
          this.loading = false;
          this.error = error.message;
          this.popupVisible = true;
        }
      );
    },
  },
};
</script>
