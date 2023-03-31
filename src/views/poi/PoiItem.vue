<template>
  <div card m-t-1 w-full>
    <van-swipe-cell>
      <template #default>
        <van-cell-group :inset="true">
          <van-cell>
            <template #title>
              <van-icon name="shop-o" class="icon-right" />
              <span>{{ item.name || "A店铺" }}</span>
              <van-tag type="success" plain class="tag">{{
                statusName || "审核通过"
              }}</van-tag>
            </template>
            <template #value>
              <van-icon name="phone-o" class="icon-right" />{{
                item.phone || "12345678"
              }}
            </template>
          </van-cell>
          <van-cell>
            <template #title>
              <van-icon name="location-o" class="icon-right" />
              <span>{{
                item.address || "A店铺地址, 上海市闵行区北桥地铁站"
              }}</span>
            </template>
            <template #value>
              <van-button
                icon="edit"
                type="primary"
                plain
                border-none
                class="editBtn"
                @click="goToEdit"
                >编辑</van-button
              >
            </template>
          </van-cell>
        </van-cell-group>
      </template>
      <template #left>
        <van-button
          square
          type="primary"
          text="Listing"
          @click="onJumpToListing"
          h-full
          w-full
        />
      </template>
      <template #right>
        <van-button
          square
          type="danger"
          text="删除"
          @click="deletePOIHandler"
          h-full
          w-full
        />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script setup>
import { computed, toRaw } from "vue";
import { useRouter } from "vue-router";

import { showConfirmDialog, showFailToast, showSuccessToast } from "vant";

import { deletePOI, getPOI } from "../../api/poi";
import { getPOIListing } from "../../api/listing";

import { findSingleListing } from "../../store"
const router = useRouter();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});


const poiItemState = {
  0: "待审核",
  1: "审核通过",
  2: "审核失败",
  3: "已关闭",
};

const statusName = computed(() => poiItemState[props.item.status]);

const goToEdit = () => {
  router.push({
    name: "edit-poi",
    params: {
      yid: props.item.yid,
    }
  });
};

const deletePOIHandler = async () => {
  const res = await showConfirmDialog({
    title: "温馨提示",
    message: "该操作将删除此门店信息，并影响已上线的平台信息展示。如果此门店关闭不再营业，请通过“编辑”-修改“营业状态”来完成修改。",
  });
  if (res) {
    console.log(toRaw(props.item.yid));
    const deleteSucess = await deletePOI({ yid: toRaw(props.item.yid) });
    if (deleteSucess) {
      showSuccessToast("删除成功");
      await getPOI();
    } else {
      showFailToast("删除失败");
    }
  }
};

const onJumpToListing = async () => {
  await getPOIListing({yid: props.item.yid})
  findSingleListing({yid: props.item.yid, item: props.item})
  router.push("/single")
}

</script>
