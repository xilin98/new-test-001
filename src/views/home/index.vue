<template>
  <div>
    <van-nav-bar title="首页" class="nav">
      <template #left>
        <van-icon name="bars" @click="showLeft = true" />
      </template>
    </van-nav-bar>

    <van-grid m-t-1>
      <van-grid-item icon="cluster-o" text="POI 管理" to="/poi" />
      <van-grid-item icon="friends-o" text="子账号管理" to="/subuser" />
      <van-grid-item icon="certificate" text="Listing 管理" to="/listing" />
      <van-grid-item icon="link-o" text="快捷入口" />
    </van-grid>

    <van-cell-group card flex m-t-1>
      <van-cell>
        <div color-info text-center text-xl font-bold>{{ storeNum }}</div>
        <div text-center>收录门店</div>
      </van-cell>
      <van-cell>
        <div color-info text-center text-xl font-bold>{{ ListingNum }}</div>
        <div text-center>Listing 数量</div>
      </van-cell>
      <van-cell>
        <div color-info text-center text-xl font-bold>{{ totalLicense }}</div>
        <div text-center>License 总量</div>
      </van-cell>
    </van-cell-group>
    <van-cell m-t-1>
      <div ref="chart" w-full h-40></div>
    </van-cell>
    <van-popup v-model:show="showLeft" position="left" :style="{ width: '80%', height: '100%' }">
      <van-cell>
        <div h-20 text-left color-info>功能一</div>
        <div h-20 text-left color-success>功能二</div>
        <div h-20 text-left color->功能三</div>
      </van-cell>
    </van-popup>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const chart = ref(null)
const storeNum = ref(155)
const ListingNum = ref(500)
const totalLicense = ref(155)
const phoneChecked = ref(80)
const totalChecked = ref(100)
const adressChecked = ref(90)
const nameChecked = ref(75)
const showLeft = ref(false)

onMounted(() => {
  const chartDom = chart.value
  const myChart = echarts.init(chartDom)
  const gaugeData = [
    {
      value: totalChecked.value,
      name: '总上线率',
      title: {
        offsetCenter: ['90%', '50%'],
      },
      detail: {
        offsetCenter: ['90%', '65%'],
      },
    },
    {
      value: phoneChecked.value,
      name: 'phone',
      title: {
        offsetCenter: ['-90%', '50%'],
      },
      detail: {
        offsetCenter: ['-90%', '65%'],
      },
    },
    {
      value: adressChecked.value,
      name: '地址',
      title: {
        offsetCenter: ['-40%', '50%'],
      },
      detail: {
        offsetCenter: ['-40%', '65%'],
      },
    },
    {
      value: nameChecked.value,
      name: '名称',
      title: {
        offsetCenter: ['10%', '50%'],
      },
      detail: {
        offsetCenter: ['10%', '65%'],
      },
    },
  ]
  const option = {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        anchor: {
          show: true,
          showAbove: true,
          size: 18,
          itemStyle: {
            color: '#FAC858',
          },
        },
        pointer: {
          icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
          width: 8,
          length: '80%',
          offsetCenter: [0, '8%'],
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
        },
        axisLine: {
          roundCap: true,
        },
        data: gaugeData,
        title: {
          fontSize: 14,
        },
        detail: {
          width: 40,
          height: 14,
          fontSize: 14,
          color: '#fff',
          backgroundColor: 'inherit',
          borderRadius: 3,
          formatter: '{value}%',
        },
      },
    ],
  }
  myChart.setOption(option)

  chart.value = myChart
})
</script>
