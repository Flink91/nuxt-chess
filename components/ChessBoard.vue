<script setup lang="ts">
import ChessboardTile from "./ChessboardTile.vue";
import BoardSizeButtons from "./BoardSizeButtons.vue";
import * as ChessboardUtils from "~~/utils/ChessboardUtils";

const props = defineProps<{
  title: string;
  description?: string;
  rows: number;
  columns: number;
  tilesConfig?: string[];
  startingPosition: string;
}>();

// const tilesStore = useTilesStore();

// the css grid will always be 12*12
const numOfTiles = props.rows * props.columns;
const gridSize = props.rows;

const pieces: string[] = ChessboardUtils.convertFENToArray(
  props.startingPosition
);
</script>

<template>
  <div class="container">
    <div class="infobox">
      <h1 class="text-4xl font-bold text-gray-900 leading-tight">
        {{ title }}
      </h1>
      <p>{{ description }}</p>
      <p>{{ pieces }}</p>
    </div>

    <div class="grid-container">
      <ChessboardTile
        v-for="(tile, index) in numOfTiles"
        :color="ChessboardUtils.getTileColor(index, rows, columns)"
      >
        <img
          v-if="pieces[index] !== ''"
          class="piece"
          :src="`/images/${pieces[index]}.svg`"
        />
        <!-- <div class="tile-text">
          {{ tile }}
        </div> -->
      </ChessboardTile>
    </div>
    <BoardSizeButtons></BoardSizeButtons>
  </div>
</template>

<style scoped>
.container {
  max-width: 100vw;
  max-height: auto;
  display: flex;
  flex-direction: row;
}
.grid-container {
  display: inline-grid;
  grid-template-columns: repeat(v-bind(gridSize), 1fr);
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  aspect-ratio: v-bind(rows) / v-bind(columns);
}

.grid {
  display: grid;
}

.tile-text {
  color: #333;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
}

.piece {
  position: absolute;
  width: 100%;
  padding: 10%;
  cursor: grab;
  aspect-ratio: 1/1;
}
</style>
