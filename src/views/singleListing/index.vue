<template>
        <van-nav-bar
        left-text="返回"
        left-arrow
        @click-left="goBack"
        title="YexSys"
      ></van-nav-bar>
  <div grid place-content-center m-t-10>
     <div class="listingcard" ref="singlecard" :class="{active: expand}" @click="onExpand">
      <div class="listingcard-header">店铺信息</div>
      <div class="listingcard-body">
        <div class="store-name">{{singleListing.name}}</div>
        <div class="store-info">地址: {{singleListing.address}}</div>
        <div class="store-info">电话: {{singleListing.phone}}</div>
        <div class="store-info">营业时间: {{singleListing.businesshour}}</div>

        <div>
    <van-cell v-for="item in singleListing.data" :key="item.yid">
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
</div>
      </div>
      <div class="listingcard-footer">
        <p>yexsys</p>
        <p class="signature"></p>
      </div>
    </div>
  </div>

</template>
      
<script setup>
import { getPOIListing } from "../../api/listing";
import { ref } from "vue";
import { singleListing } from "../../store"
import { useRouter } from 'vue-router'

const router = useRouter()
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

const singlecard = ref(null)
const expand = ref(true)
const onExpand = () => {
  expand.value = !expand.value
}

const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
.listingcard {
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 350px;
        border-radius: 5px;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
      }

      .listingcard:hover {
        transform: translateY(-5px);
      }

      .listingcard-header {
        background-color: #333;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        padding: 20px;
      }

      .listingcard-body {
        padding: 20px;
        height: 0;
        opacity: 0;
        transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;
      }

      .listingcard.active .listingcard-body {
        height: auto;
        opacity: 1;
      }

      .listingcard-footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
        font-size: 18px;
        font-style: italic;
      }

      .signature {
        font-size: 14px;
        font-style: normal;
      }

      .store-name {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
      }

      .store-info {
        font-size: 16px;
        margin-bottom: 10px;
        text-align: center;
      }
</style>
