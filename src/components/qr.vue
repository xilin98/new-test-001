<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import QRCode from "qrcode";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 200,
  },
});

const canvas = ref(null);

onMounted(() => {
  QRCode.toCanvas(canvas.value, props.url, {
    width: props.size,
    margin: 0,
  });
});
</script>

<style>
canvas {
  display: block;
  margin: auto;
}
</style>
