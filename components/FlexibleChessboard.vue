<template>
  <div class="pasdfds">
    <chessboard @onMove="showInfo" />
    <div>{{ info }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const info = ref(null)
const showInfo = (data) => {
  info.value = data
}
</script>

<style scoped></style>
