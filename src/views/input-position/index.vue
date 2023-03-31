<template>
  <div ref="mapContainer" h-55 w-full></div>
  <div relative bottom-0>
    <div flex w-full >
      <van-button w-45 @click="emits('cancelLocation')">取消</van-button>
      <van-button w-45 @click="onConfirmLocation" type="primary">确认</van-button>
    </div>
  </div>
  

</template>

<script setup>

import { ref, onMounted, toRaw } from "vue";

import AMapLoader from "@amap/amap-jsapi-loader";

import {useState} from "../../store";

import {useCurrentLocation} from "../../hooks";

import { currentItem  } from "../../store";

const emits = defineEmits(["confirmLocation", "cancelLocation"])

const getInitLocation = async ()=>{
  const {latitude, longitude} = await useCurrentLocation();
  console.log({latitude, longitude})
  currentItem.value.lat = latitude.value;
  currentItem.value.lng = longitude.value;
}

getInitLocation();

const map = ref(null);
const marker = ref(null);
const mapContainer = ref(null);


const { apiKey } = useState();

onMounted(() => {
  initMap();
});

async function initMap() {
 await AMapLoader.load({
    key: apiKey,
    version: "2.0",
    plugins: ['AMap.Geolocation'],
  });
  
  map.value = new AMap.Map(mapContainer.value, {
    zoom: 16,
  });

  // const center = new AMap.LngLat(currentItem.value.lng, currentItem.value.lat);

  // map.value.setCenter(center);
  // if(currentItem.value.lat && currentItem.value.lng){
  //   const targetPosition = new AMap.LngLat(toRaw(currentItem.value.lng), toRaw(currentItem.value.lat)); // 目标位置经纬度
  //   map.value.setCenter(targetPosition); // 将地图中心点设置为目标位置
  // }else{
     AMap.plugin('AMap.Geolocation', function () {
      const geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, // 是否使用高精度定位，默认为 true
        timeout: 10000, // 超时时间，单位 ms，默认为 10000
        buttonOffset: new AMap.Pixel(10, 20), // 定位按钮的位置偏移量，默认为 Pixel(10, 20)
        zoomToAccuracy: true, // 是否自动调整地图缩放级别以适应定位结果范围，默认为 true
        buttonPosition: 'RB' // 定位按钮的位置，RB 表示右下角
      });

      map.value.addControl(geolocation);
      geolocation.getCurrentPosition(function (status, result) {
        if (status === 'complete') {
          var position = result.position;
          map.value.setCenter(position); // 将地图中心点设置为当前位置
          console.log({position})
        } else {
          console.log('定位失败：' + result.message);
        }
      });
    });
  // // }
  //     const geolocation = new AMap.Geolocation({
  //       enableHighAccuracy: true, // 是否使用高精度定位，默认：true
  //       timeout: 10000, // 超过10秒后停止定位，默认：无穷大
  //       showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
  //       buttonPosition: 'RB', // 定位按钮的停靠位置，默认：'LB'，左下角
  //       buttonOffset: new AMap.Pixel(10, 20), // 定位按钮距离容器的偏移量，默认：Pixel(10, 20)
  //     });

      // map.addControl(geolocation);

      // geolocation.getCurrentPosition();

      // AMap.event.addListener(geolocation, 'complete', (location) => {
      //   this.location = location;
      //   this.loading = false;
      // });

      // AMap.event.addListener(geolocation, 'error', (error) => {
      //   console.error('location error:', error);
      //   this.loading = false;
      // });

    
  // map.value.setFitView();

  marker.value = new AMap.Marker({
    position: map.value.getCenter(),
    draggable: true,
    cursor: "move",
  });

  marker.value.setMap(map.value);

  map.value.on("click", (e) => {
    marker.value.setPosition(e.lnglat);
    currentItem.value.lat = e.lnglat.lat;
    currentItem.value.lng = e.lnglat.lng;
  });

  marker.value.on("dragend", (e) => {
    currentItem.value.lat = e.lnglat.lat;
    currentItem.value.lng = e.lnglat.lng;
  });


}
const onConfirmLocation = () => {
  emits("confirmLocation");
};
</script>
<!-- <script>
(function(){
    var iframe = document.getElementById('test').contentWindow;
    document.getElementById('test').onload = function(){
      iframe.postMessage('hello','https://m.amap.com/picker/');
    };
    window.addEventListener("message", function(e){
      alert('您选择了:' + e.data.name + ',' + e.data.location)
    }, false);
}())
</script> -->
