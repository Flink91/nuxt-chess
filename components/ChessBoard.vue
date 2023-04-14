<script setup lang="ts">
// import ChessboardTile from "./ChessboardTile.vue";
import * as ChessboardUtils from "~~/utils/ChessboardUtils";

const props = defineProps<{
  title: string;
  description?: string;
  rows: number;
  columns: number;
  tilesConfig?: string[];
  startingPosition: string;
}>();

// the css grid will always be 12*12
const numOfTiles = props.rows * props.columns;

//onmounted will run on client side, so window is available here
onMounted(() => {
  ChessboardUtils.setSize(props.rows, props.columns);
  window.addEventListener("resize", resizeHandler);
  function resizeHandler(e: any) {
    ChessboardUtils.setSize(props.rows, props.columns);
  }
});
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
  <div id="chessboard-container">
    <div id="chessboard" @mousedown="grabPiece" @mousemove="movePiece" @mouseup="dropPiece">
      <ChessboardTile v-for="(tile, index) in numOfTiles" :color="ChessboardUtils.getTileColor(index, rows, columns)">
        <div v-if="pieces[index] !== ''" class="piece" :style="{
          backgroundImage: `url(/images/${pieces[index]}.svg)`,
        }"></div>
      </ChessboardTile>
    </div>
  </div>
</template>

<style scoped>
#chessboard-container {
  flex-grow: 1;
  height: 100%;
}

#chessboard {
  display: inline-grid;
  grid-template-columns: repeat(v-bind(gridSize), 1fr);
  margin: 0 auto;
  aspect-ratio: v-bind(rows) / v-bind(columns);
  width: -webkit-fill-available;
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
  background-position: center;
}

.piece:active {
  z-index: 99;
  cursor: grabbing;
}
</style>
