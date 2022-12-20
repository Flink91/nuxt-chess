<template>
  <div>
    <div class="info">
      Columns: {{ tilesStore.columns }} Rows: {{ tilesStore.rows }}
    </div>
    <button @click="addRow">+ row</button>
    <button @click="removeRow">- row</button>
    <button @click="addCol">+ col</button>
    <button @click="removeCol">- col</button>
  </div>
</template>

<script setup lang="ts">
const tilesStore = useTilesStore();

const addRow = () => {
  console.log("adding row");
  tilesStore.addRow();
};

const removeRow = () => {
  tilesStore.removeRow();
};

const addCol = () => {
  tilesStore.addColumn();
};

const removeCol = () => {
  tilesStore.removeColumn();
};
</script>

<style scoped></style>
