<template>
    <van-collapse-item clickable @click="onClick">
      
      <template #title>
        <van-icon name="shop-o" class="icon-right" />
        <span>{{ item.name || "暂无数据" }} </span>
      </template>

      <template #value>
        <van-circle
         v-model:current-rate="rate"
         :speed="100"
         h-2
         w-4
         :stroke-width="100"
        />
      </template>
           
       <van-cell v-for="item in list" :key="item.yid" center >
           <template #title>
             <van-icon p-r-0.5 :class="['icon-right', `icon-${item.platform}` ]" />
             {{ platformDic[item.platform ]}}
              <van-tag :type="item.status == '1' ? 'success' : 'primary'" plain class="tag">{{ statusDic[item.status] || "处理中" }}</van-tag>
          </template>
              
          <template #value v-show="item.status == 1"
              >
              <a :href="item.mobile_url" color-info>
                {{ "点击跳转 " }}
              <van-icon name="share-o" />
            </a>
          </template>

             <template v-show="item.status !== 1"
             >{{ "正在处理 " }}
             <van-icon name="clock-o" />
            </template>
        </van-cell>
     </van-collapse-item>
</template>

<script setup>
import { getPOIListing } from "../../api/listing";
import { ref } from "vue";
import { findListing } from '../../store'

const list = ref([])


const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const rate = 
Number(props.item.listings_status.slice(-1));


const statusDic = {
  1: "已受理",
}

const platformDic = {
  Amap: "高德",
  Baidu: "百度",
  360: "360",
  Tencent: "腾讯",
}

const onClick = async () => {
    const isOK = await getPOIListing({ yid: props.item.yid })
    if(isOK){
      list.value =  findListing({yid: props.item.yid}).data
    }
  };

</script>
