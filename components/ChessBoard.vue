<script setup lang="ts">
import ChessBoardTile from "./ChessBoardTile.vue";
import BoardSizeButtons from "./BoardSizeButtons.vue";
// import { useTilesStore } from "@/stores/tiles";
import { ref } from "vue";

const tilesStore = useTilesStore();

interface TileRows {
  [key: string]: number[];
}

const tileRows: TileRows = {
  // alpha character
  h: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  g: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  f: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  e: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  d: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  c: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  b: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  α: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};

const convertTileRowsToStrings = () => {
  let temp: string[] = [];
  for (let key in tileRows) {
    tileRows[key].forEach((element: string | number) => {
      temp.push(key.toString() + element.toString());
    });
  }
  return temp;
};

const tiles = ref(convertTileRowsToStrings());

// the colors of the tiles have to alternate except for when the row ends
const getTileColor = (tileID: number) => {
  const firstDigit = tileID < 10 ? 0 : Number(String(tileID)[0]);
  if (firstDigit % 2 == 0) {
    return tileID % 2 == 0 ? "dark" : "light";
  } else {
    return tileID % 2 == 0 ? "light" : "dark";
  }
};
</script>

<template>
  <div class="container">
    <div :class="'grid-container'">
      <ChessBoardTile
        v-for="(tile, index) in tiles"
        :color="getTileColor(index)"
      >
        <img class="piece" src="~/assets/black pawn.svg" />
        <div class="tile-text">
          {{ tile }}
        </div>
      </ChessBoardTile>
    </div>
    <BoardSizeButtons></BoardSizeButtons>
  </div>
</template>

<style scoped>
.container {
  max-width: 100vw;
  max-height: auto;
}
.grid-container {
  display: inline-grid;
  grid-template-columns: repeat(10, 1fr);
  margin: 0 auto;
  width: 100%;
  max-width: 90vh;
  max-height: 90vh;
  aspect-ratio: 1 / 1;
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
  width: 100%;
  aspect-ratio: 1/1;
}
</style>
