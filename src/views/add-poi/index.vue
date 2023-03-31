<template>
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="goBack"
      title="添加商户"
      >
    </van-nav-bar>
   
    <van-field
        v-model="currentItem.name"
        label="商户名称"
        placeholder="请输入商户名称"
        :rules="rules.name"
      />

      <van-field
        v-model="currentItem.phone"
        type="phone"
        label="电话号码"
        placeholder="请输入电话号码"
        :rules="rules.phone"
      />

      <van-field
        v-model="ereaText"
        is-link
        readonly
        label="地区选择"
        :columns-placeholder="['请选择', '请选择', '请选择']"
        placeholder="点击选择省市区"
        @click="showArea = true"
      />

      <van-popup v-model:show="showArea" position="bottom">
        <van-area
          :area-list="areaList"
          @confirm="onConfirmArea"
          @cancel="showArea = false"
        />
      </van-popup>

      <van-cell
    :title="positionTitle"
    @click="
      () => {
        showMap = true
      }
    "
    is-link
    icon="location-o"
  />

      <van-popup v-model:show="showMap" w-full>
        <input-position 
          h-60
          @confirm-location="onConfirmLocation" 
          @cancel-location="showMap = false"
        ></input-position>
      </van-popup>

      <van-field
        v-model="currentItem.address"
        type="address"
        label="详细地址"
        placeholder="请输入详细地址"
        :rules="rules.address"
      />

      <van-field
        type="status"
        label="营业状态"
        placeholder="请输入营业状态"
        :rules="rules.status"
        label-align="top"
      >

      <template #input>
        <van-radio-group v-model="currentItem.status" direction="horizontal" >
          <van-radio :name="1">正常营业</van-radio>
          <van-radio :name="0">即将开业</van-radio>
          <van-radio :name="2">暂停营业</van-radio>
        </van-radio-group>
      </template>
      </van-field>
      <!-- <van-field v-model="currentItem.businesshour" label="营业时间" placeholder="请输入营业时间"  /> -->
<!--
 <van-cell 
 title="添加营业时段" is-link        
  @click="()=>{
  editTimeShow=true;
  currentItem.activePicker = 't1'}" > 
 
</van-cell>



    
    <van-cell-group title="营业时间">
      <van-cell v-for="(item) in choosedTimePeriod">
        {{ item }}
      </van-cell>
    </van-cell-group>


     <van-cell title="修改营业时间" w-full is-link @click="editTimeShow=true" disable="choosedTimePeriod.length < 3">
    </van-cell>
 
    <van-popup
      v-model:show="editTimeShow"
      round
      position="bottom"
      @edit-time-cancel="editTimeShow = false"
      @edit-time-confirm="onEditTimeConfirm"
      h-70
    >
    <edit-time 
        @editTimeConfirm="onEditTimeConfirm"
        @editTimeCancel="editTimeShow=false"
    ></edit-time>
    </van-popup> 
  


<van-cell title="时段二" is-link   v-if="isTwo"     @click="()=>{
    editTimeShow=true
    currentItem.activePicker = 't2'}" >
    </van-cell>
    <van-field v-model="currentItem.specialbusinesshour" label="特殊营业时间" placeholder="请输入特殊营业时间(选填)"  />

    <van-field v-model="currentItem.brandId" label="品牌ID" placeholder="选填" />

   
    <van-popup
      v-model:show="editTimeShow"
      round
      position="bottom"
      @edit-time-cancel="editTimeShow = false"
      @edit-time-confirm="onEditTimeConfirm"
      h-70
    >
      <edit-time 
        @editTimeConfirm="onEditTimeConfirm"
        @editTimeCancel="editTimeShow=false"
      ></edit-time>
    </van-popup>
  -->
    <div flex>      
      <van-button w-full type="primary" block @click="onAdd">
        提交
      </van-button>
      <van-button w-full block @click="goBack"> 取消 </van-button>
    </div>


</template>


<script setup>

import { ref, computed} from "vue";
import { useRouter, useRoute } from "vue-router";

import { areaList } from "@vant/area-data";

import InputPosition from "../input-position/index.vue";
import EditTime from "../../components/EditTime.vue";

import { useState } from "../../store";
import { updatePOI, createPOI } from "../../api/poi";

import { bindCreatePOIItem } from "../../store";

const { businessTime, currentItem } = useState() 

const route = useRoute();
const router = useRouter();

// const timePeriod = businessTime;

// const choosedTimePeriod = computed(() => timePeriod.value.filter((item) => item.checked))

bindCreatePOIItem();

const showMap = ref(false);

const positionValue = `lat: ${currentItem.value.lat};lng: ${currentItem.value.lng}`

const rules = ref({
  username: [{ required: true, message: "用户名不能为空" }],
  phone: [{ required: true, message: "电话号码不能为空" }],
  lat: [{ required: true, message: "纬度不能为空" }],
  lng: [{ required: true, message: "经度不能为空" }],
});

const goBack = () => {
  router.back();
};

const showArea = ref(false);

const ereaText = computed(()=>{
  return currentItem.value.province +" " +  currentItem.value.city + " "+currentItem.value.district
})

const onConfirmArea = ({ selectedOptions  }) => {
  showArea.value = false;
  const [province, city, district] = selectedOptions ;
  currentItem.value.province = province.text;
  currentItem.value.city = city.text;
  currentItem.value.district = district.text;
};

const positionTitle = ref("点击定位")

const onConfirmLocation = () => {
  positionTitle.value = "已定位"
  showMap.value = false;
}

const editTimeShow = ref(false); 

const onEditTimeConfirm = (data) => {
  editTimeShow.value = false;
};

const onAdd = async () => {
  await createPOI({
    name: currentItem.value.name,
    address: currentItem.value.address,
    lat: currentItem.value.lat,
    lng: currentItem.value.lng,
    phone: currentItem.value.phone,
    country: "cn",
    province: currentItem.value.province,
    city: currentItem.value.city,
    district: currentItem.value.district,
    businesshour: currentItem.value.businesshour,
    specialbusinesshour:'',
    status: currentItem.value.status,
  })
  
  goBack();
}

</script>
