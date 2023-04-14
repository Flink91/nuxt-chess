<template>
  <div class="page">
    <navbar />    
    <subnavbar/>
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
.content {
  flex-grow: 1;
}
.router-link-active {
  color: blueviolet;
}
</style>
