<template>
  <div flex>
    <van-cell
      :title="scopeText"
      is-link
      @click="showArea = true"
      h-4
      w-14
      arrow-direction="down"
    />

    <form action="/" w-full>
      <van-search
        v-model="seachValue"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @clear="onClearSearch"
        h-4
      />
    </form>

    <van-button w-8 block @click="clear" h-4 border-none>清除</van-button>
  </div>

  <van-popup v-model:show="showArea" position="bottom">
    <van-area
      :area-list="areaList"
      @confirm="onConfirm"
      @cancel="showArea = false"
    />
  </van-popup>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { areaList } from "@vant/area-data";

import {keywords} from "../store"

const emit = defineEmits(["search", "filter"]);

onMounted(() => {
  clear()
})

const scopeText = ref("筛选");
const showArea = ref(false);
const seachValue = ref("");
let scope = "";

const onSearch = (val) => {
  if (val) {
    keywords.value += val
  }
};

const clear = () => {
  seachValue.value = ''
  scopeText.value = "筛选"
  keywords.value = ''
}

const onConfirm = ({ selectedOptions }) => {
  showArea.value = false;
  const [province, city, county] = selectedOptions;
  scopeText.value = county.text;
  scope = province.text + city.text + county.text;
  keywords.value += scope
};

const onClearSearch = () => {
  seachValue.value = "";
  keywords.value = ""
};

</script>
