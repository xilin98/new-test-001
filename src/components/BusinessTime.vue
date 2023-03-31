<template>
<div bg-white>
   <div class="text-0.6em p-t-1 p-l-1.2">{{ label }}</div>
    <div class="text-0.6em ">
      <div class="mr-4 p-y-2 p-l-1.2 " v-for="(segment, index) in businessHours" :key="index">{{ formatWeekdays(segment.weekday) }}   <span p-l-20>
        {{ segment.time }}
      </span>
    </div>
    
    </div>
</div>
</template>


<script setup>
import { formatWeekdays } from '../utils/tools';
const props = defineProps({
  label: {
    type: String,
    default: '营业时间',
  },
  businessHours: {
    type: Array,
    default: () => [],
  },
})


</script>
