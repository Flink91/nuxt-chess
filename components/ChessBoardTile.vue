<template>
  <div @click="tileClicked" class="tile" :class="color"><slot></slot></div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: String,
});

const tileClicked = () => {
  console.log("clicked a tile");
};
</script>

<style scoped>
.tile {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: left;
  align-items: left;
  float: left;
}

.light {
  background: antiquewhite;
}
.dark {
  background: burlywood;
}
</style>
