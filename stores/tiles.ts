// import { ref, computed } from "vue";
// import { defineStore } from "pinia";

export const useTilesStore = defineStore("tiles", {
  state: () => {
    return {
      rows: 8,
      columns: 8,
    };
  },
  actions: {
    addColumn() {
      if (this.columns >= 10) return;
      this.columns++;
    },
    removeColumn() {
      if (this.columns <= 4) return;
      this.columns--;
    },
    addRow() {
      if (this.rows >= 10) return;
      this.rows++;
    },
    removeRow() {
      if (this.rows <= 4) return;
      this.rows--;
    },
  },
  getters: {
    numberOfTiles: (state) => {
      return state.columns * state.rows;
    },
  },
});
