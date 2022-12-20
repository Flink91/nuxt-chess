import { describe, it, expect } from "vitest";
import * as ChessboardUtils from "../utils/ChessboardUtils";

describe("runs", () => {
  it("runsnicely", () => {
    expect(true).toBe(true);
  });
});

describe("Chessboard", () => {
  it("renders the correct tile color", () => {
    expect(ChessboardUtils.getTileColor(0, 8, 8)).toBe("light");
    expect(ChessboardUtils.getTileColor(0, 1, 1)).toBe("light");
    expect(ChessboardUtils.getTileColor(1, 8, 8)).toBe("dark");
    expect(ChessboardUtils.getTileColor(8, 8, 8)).toBe("dark");
    expect(ChessboardUtils.getTileColor(9, 8, 8)).toBe("light");
  });
});
