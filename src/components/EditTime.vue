<template>
  <van-cell-group title="请选择营业日" flex flex-wrap>
    <van-cell
      v-for="item in cTime.weekday"
      :key="item"
      :title="WEEKDAYS[item]"
      @click="toggleOption(item)"
      :class="[cTime.isChecked[item] ? 'active' : '', cTime.isDisable[item] ? 'disable' : '']"
      w-10
      h-4
    />
  </van-cell-group>

  <van-cell-group title="请选择具体时段">
    <van-cell title="时段一" is-link :value="time1.start + ' - ' + time1.end" @click="onClickTime1">
      <template #icon v-if="isAdd">
        <van-icon
          name="add-o"
          p-t-0.5
          p-r-1
          w-2
          h-2
          @click.stop="
            () => {
              isAdd = false
              isTime2 = true
            }
          "
        >
        </van-icon>
      </template>
    </van-cell>

    <van-cell title="时段二" is-link :value="time2.start + ' - ' + time2.end" @click="onClickTime2" v-if="isTime2"> </van-cell>
  </van-cell-group>

  <van-popup v-model:show="showPickerHour" round position="bottom">
    <van-picker-group title="请选择具体时段" :tabs="['开始时间', '结束时间']" @confirm="onConfirmChooseTime" @cancel="onCancelChooseTime">
      <van-time-picker v-model="startTime" />
      <van-time-picker v-model="endTime" />
    </van-picker-group>
  </van-popup>

  <div flex>
    <van-button w-35 @click="onCancel"> 取消 </van-button>
    <van-button type="primary" w-35 @click="onConfirm"> 确定 </van-button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { showToast } from 'vant'
import { useState } from '../store'

import { currentItem } from '../store'
import { mergeTimes } from '../utils/tools'

import { timePickerReturn } from '../store'

import { TIME_37, newTime, WEEKDAYS, times } from '../store'
// const pickable = computed(()=>currentItem.value.businessTime.filter((item)=>item.picker == currentItem.value.activePicker))
// debugger

const cTime = newTime

// import {TIME_45} from "../store/"
// const cTime = ref(null)
// const vTime = ref(null)
// if(currentItem.activePicker === "t1"){
//   cTime = ref(TIME_37);
//   vTime = computed(()=>cTime.value.filter((item)=>item.checked))
// }else{
//   const cTime = ref(TIME_45);
// }

// const vT = computed()

const emits = defineEmits(['editTimeCancel', 'editTimeConfirm'])

const time1 = ref({ start: '09:00', end: '18:00' })
const time2 = ref({ start: '09:00', end: '18:00' })

const isAdd = ref(true)
const isTime2 = ref(false)
const showPickerHour = ref(false)
const activeTimePicker = ref(1)

const startTime = ref(['09', '00'])
const endTime = ref(['18', '00'])

const toggleOption = (item) => {
  cTime.value.isChecked[item] = !cTime.value.isChecked[item]
  // currentItem.value.businessTime[index].picker = !currentItem.value.activePicker;
}

const onConfirmChooseTime = () => {
  // if(~~startTime.value[0] >= ~~endTime.value[0] && ~~startTime.value[1] >= ~~endTime.value[1]){
  //     showToast("结束时间不能小于开始时间");
  //     return;
  // }
  if (activeTimePicker.value === 1) {
    time1.value.start = startTime.value.join(':')
    time1.value.end = endTime.value.join(':')
  } else {
    // const t1End = time1.value.end.split(':').map(Number);
    // if(~~startTime.value[0] <= t1End[0] && ~~startTime.value[1] <= t1End[1]){
    //   showToast("第二段营业时间的开始值必须大于第一段营业时间的结束值");
    //   return;
    // }
    time2.value.start = startTime.value.join(':')
    time2.value.end = endTime.value.join(':')
  }
  showToast(`${startTime.value.join(':')} ${endTime.value.join(':')}`)
  showPickerHour.value = false
}

const onCancelChooseTime = () => {
  showPickerHour.value = false
}

const onClickTime1 = () => {
  showPickerHour.value = true
  activeTimePicker.value = 1
}

const onClickTime2 = () => {
  showPickerHour.value = true
  activeTimePicker.value = 2
}

const onCancel = () => {
  emits('editTimeCancel')
}

const onConfirm = () => {
  console.log('time1', time1.value)
  console.log('time2', time2.value)

  // const c = currentItem.value.businessTime.filter((item) => item.checked)
  // for (let item of cTime.value) {
  //   if (item.checked) {
  //     item.time = mergeTimes(time1.value, time2.value)
  //   }
  // }

  // const weeks = cTime.value.reduce((acc, cur) => {
  //   if (cur.checked) {
  //     acc += cur.label
  //   }
  //   return acc
  // }, '')
  const weekday = cTime.value.weekday.filter(item=>{
    return cTime.value.isChecked[item];
  })
  
  console.log({weekday})
  const time = mergeTimes(time1.value, time2.value)
  console.log({time})
  times.value.push({weekday,time})
  // const timeStr = time.map((item) => item.start + '-' + item.end).join(',')

  // timePickerReturn.value = weeks + timeStr

  // console.log({ time, weeks })
  // console.log(timePickerReturn.value)
  // currentItem.value.businesshour = timePickerReturn.value

  // for(let item of currentItem.value.businessTime){
  //   if(!item.checked){
  //     item.picker = Number(!item.picker)
  //   }else{
  //     item.time = time
  //   }
  // }
  // console.log(currentItem.value)
  // currentItem.value.businessTime =    currentItem.value.businessTime.map((item)=>{
  //   if(item.isActive && item.checked){
  //     item.isActive = false;
  //     const time = [time1.value]
  //     if(time2.value){
  //       time.push(time2.value);
  //     }
  //     return {...item, time}
  //   }
  //   return {...item}
  // })

  emits('editTimeConfirm')
}

// const isDisable = ({t1, t2}) => {
//   if(currentItem.activeTimePicker == "t1"){
//     return t2
//   }
//   return t1
// }
</script>

<style>
.active::before {
  background-color: var(--main-color);
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  transform: translate(50%, 50%) rotate(45deg);
  z-index: 1;
}

.disabled {
  color: #ccc;
}
</style>
