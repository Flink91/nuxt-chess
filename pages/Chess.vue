<template>
  <div class="content">
      <Chessboard
        title="Chess"
        description="Normal Chess"
        :rows="8"
        :columns="8"
        :starting-position="startingFEN"
      />
  </div>
</template>

<script setup lang="ts">
/* Lowercase letters describe the black pieces. 
  Just like in PGN, "p" stands for pawn, "r" for rook, "n" for knight, "b" for bishop, "q" for queen, and "k" for king. 
  The same letters are used for the white pieces, but they appear in uppercase. 
  Empty squares are denoted by numbers from one to eight, depending on how many empty squares are between two pieces.*/

const startingFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
</script>

<style scoped></style>
