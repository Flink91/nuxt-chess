const calculateSize = (
  windowWidth: number,
  windowHeight: number,
  rows: number,
  columns: number
): number => {
  const isLongerThanWide: boolean = columns > rows;
  let size: number = isLongerThanWide
    ? Math.min(windowWidth * (rows / columns), windowHeight * (rows / columns))
    : Math.min(windowWidth, windowHeight);
  return size;
};

// the colors of the tiles have to alternate except for when the row ends
const getTileColor = (tileID: number, rows: number, columns: number) => {
  const curRow = Math.floor(tileID / rows);
  if (curRow % 2 == 0) {
    return tileID % 2 == 0 ? "light" : "dark";
  } else {
    return tileID % 2 == 0 ? "dark" : "light";
  }
};

const convertFENToArray = (fen: string): string[] => {
  let newArr = [];
  let i = 0;

  while (i < fen.length) {
    console.log(fen.charAt(i), isNumber(fen.charAt(i)));
    if (isNumber(fen.charAt(i))) {
      let num: number = parseInt(fen.charAt(i));
      // if two digit number coming up
      if (parseInt(fen.charAt(i + 1))) {
        num = parseInt(fen.charAt(i) + fen.charAt(i++));
      }
      while (num-- > 0) {
        newArr.push("");
      }
    }

    switch (fen.charAt(i)) {
      case "k":
        newArr.push("blackking");
        break;
      case "n":
        newArr.push("blackknight");
        break;
      case "r":
        newArr.push("blackrook");
        break;
      case "b":
        newArr.push("blackbishop");
        break;
      case "q":
        newArr.push("blackqueen");
        break;
      case "p":
        newArr.push("blackpawn");
        break;
      case "K":
        newArr.push("whiteking");
        break;
      case "N":
        newArr.push("whiteknight");
        break;
      case "R":
        newArr.push("whiterook");
        break;
      case "B":
        newArr.push("whitebishop");
        break;
      case "Q":
        newArr.push("whitequeen");
        break;
      case "P":
        newArr.push("whitepawn");
        break;
      case "/":
        break;
    }
    i++;
  }
  return newArr;
};

function isNumber(value: string | number): boolean {
  return value != null && value !== "" && !isNaN(Number(value.toString()));
}

export { getTileColor, convertFENToArray, calculateSize };
