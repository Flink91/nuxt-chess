<template>
  <div class="page">
    <navbar />
    <slot />
  </div>
</template>

<script setup lang="ts"></script>
<style>
body {
  background-color: darkgray;
}
.page {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.router-link-active {
  color: blueviolet;
}
</style>
