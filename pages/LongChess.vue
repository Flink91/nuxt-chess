<template>
  <div class="content">
    <Chessboard title="Long Chess" description="Another chess variant on a 5x4 board." :rows="3" :columns="5"
      :starting-position="startingFEN" />
  </div>
  <BoardSizeButtons />
</template>

<script setup lang="ts">
/* Lowercase letters describe the black pieces. Just like in PGN, "p" stands for pawn, "r" for rook, "n" for knight, "b" for bishop, "q" for queen, and "k" for king. 
The same letters are used for the white pieces, but they appear in uppercase. 
Empty squares are denoted by numbers from one to eight, depending on how many empty squares are between two pieces.*/

const startingFEN = "knbr/p3/4/3P/RBNK";
</script>

<style scoped>
</style>
