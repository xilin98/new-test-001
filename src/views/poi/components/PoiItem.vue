<template>
  <div class="card">
    <van-swipe-cell class="poi-list-item">
      <template #default>
        <van-cell-group :inset="true">
          <van-cell>
            <template #title>
              <van-icon name="shop-o" class="icon-right" />
              <span>{{ brandName || "A店铺" }}</span>
              <van-tag type="success" plain class="tag">{{
                status || "成功"
              }}</van-tag>
            </template>
            <template #value>
              <van-icon name="phone-o" class="icon-right" />{{
                phone || "12345678"
              }}
            </template>
          </van-cell>
          <van-cell>
            <template #title>
              <van-icon name="location-o" class="icon-right" />
              <span>{{
                brandAddress || "A店铺地址, 上海市闵行区北桥地铁站"
              }}</span>
            </template>
            <template #value>
              <van-button
                icon="edit"
                type="primary"
                plain
                class="editBtn"
                @click="goToEdit"
                >编辑</van-button
              >
            </template>
          </van-cell>
        </van-cell-group>
      </template>
      <template #right>
        <van-button class="swipe-right" square type="danger" text="删除" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  brandName: String,
  brandAddress: String,
  phone: String,
  status: String,
  bussiesTime: String,
});
const goToEdit = () => {
  router.push("/poi-edit");
};
</script>

<style scoped>
.swipe-right {
  height: 100%;
}
.icon-right {
  margin-right: 10px;
}
.poi-list-item {
  margin-bottom: 10px;
}
.tag {
  margin-left: 10px;
}

.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}
.editBtn {
  height: 80%;
  border: none;
}
</style>
