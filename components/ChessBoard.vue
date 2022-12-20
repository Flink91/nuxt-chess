<script setup lang="ts">
import ChessboardTile from "./ChessboardTile.vue";
import BoardSizeButtons from "./BoardSizeButtons.vue";
import * as ChessboardUtils from "~~/utils/ChessboardUtils";
import { client } from "process";

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

let activePiece: HTMLElement | null = null;

const grabPiece = (e: MouseEvent) => {
  const element = e.target as HTMLElement;
  activePiece = element;
  if (element.classList.contains("piece")) {
    console.log(e);
    const x = e.clientX;
    const y = e.clientY;
    console.log("found pice at", x, y);
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    console.log("moving to", element.style.left, element.style.top);
  }
};

const movePiece = (e: MouseEvent) => {
  if (activePiece === null) return;

  const element = e.target as HTMLElement;

  if (element.classList.contains("piece")) {
    const x = e.clientX;
    const y = e.clientY;
    console.log("found pice at", x, y);
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    console.log("moving to", element.style.left, element.style.top);
  }
  console.log(e.clientY);
};

const dropPiece = (e: MouseEvent) => {
  activePiece = null;
};
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

    <div
      class="grid-container"
      @mousedown="grabPiece"
      @mousemove="movePiece"
      @mouseup="dropPiece"
    >
      <ChessboardTile
        v-for="(tile, index) in numOfTiles"
        :color="ChessboardUtils.getTileColor(index, rows, columns)"
      >
        <!-- <img
          v-if="pieces[index] !== ''"
          class="piece"
          :src="`/images/${pieces[index]}.svg`"
        /> -->
        <div
          v-if="pieces[index] !== ''"
          class="piece"
          :style="{
            backgroundImage: `url(/images/${pieces[index]}.svg)`,
          }"
        ></div>

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
  flex-direction: column;
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
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  cursor: grab;
  height: 80px;
  width: 80px;
  aspect-ratio: 1/1;
}
.piece:active {
  z-index: 99;
  cursor: grabbing;
}
</style>
