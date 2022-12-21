<template>
  <div class="content">
    <div><h1>CHESS OF THE DAY</h1></div>

    <ul class="list-none py-4 px-6 bg-gray-300">
      <li class="inline-block mr-4">
        <NuxtLink class="text-blue-500 hover:text-blue-800" to="/MicroChess"
          >Micro Chess</NuxtLink
        >
      </li>
      <li class="inline-block mr-4">
        <NuxtLink class="text-blue-500 hover:text-blue-800" to="/Chess"
          >Chess</NuxtLink
        >
      </li>
      <li class="inline-block mr-4">
        <a class="text-blue-500 hover:text-blue-800" href="#">Link 3</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
