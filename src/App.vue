<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
:root {
  --main-color: #1989fa;
  --main-background-color: #f5f5f5;
  --sidebar-background-color: #2d3e50;
  --sidebar-text-color: #ffffff;
  --sidebar-icon-color: #b3c2d1;
  --sidebar-hover-selected-background-color: #1abc9c;
  --main-content-area-background-color: #ffffff;
  --title-text-color: #34495e;
  --body-text-color: #5d6d7e;
  --table-border-color: #d3d3d3;
  --table-header-background-color: #ecf0f1;
  --table-header-text-color: #5d6d7e;
  --link-color: #1989fa;
  --button-background-color: #1abc9c;
  --button-text-color: #ffffff;
  --button-hover-selected-background-color: #16a085;
  --warning-color: #f39c12;
  --success-color: #27ae60;
  --error-color: #c0392b;
  --info-color: #1989fa;
}
:root:root {
  --van-primary-color: white;
  --van-nav-bar-title-text-color: white;
}
body {
  background-color: var(--main-background-color);
  display: block;
  overflow-x: hidden;
}

.icon-360 {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url('./assets/360.jpg');
  background-size: cover;
}

.icon-Amap {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url('./assets/amap.png');
  background-size: cover;
}

.icon-Baidu {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url('./assets/baidu.png');
  background-size: cover;
}

.icon-Tencent {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url('./assets/tencent.jpg');
  background-size: cover;
}
</style>
