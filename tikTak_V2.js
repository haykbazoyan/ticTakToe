function checker(matrix, size) {
  for (let i = 0; i < size; i++) {
    let countX = 0;
    let countY = 0;
    for (let j = 0; j < size; j++) {
      if (matrix[i][j] === "X") {
        countX += 1;
      } else if (matrix[i][j] === "O") {
        countY += 1;
      }
    }
    if (countX === size) {
      console.log(`Win Player_1`);
      console.log(matrix);
      return true;
    } else if (countY === size) {
      console.log(`Win Player_2`);
      console.log(matrix);
      return true;
    }
  }

  for (let i = 0; i < size; i++) {
    let countX = 0;
    let countY = 0;

    for (let j = 0; j < size; j++) {
      if (matrix[j][i] === "X") {
        countX += 1;
      } else if (matrix[i][j] === "O") {
        countY += 1;
      }
    }
    if (countX === size) {
      console.log(`Win Player_1`);
      console.log(matrix);
      return true;
    } else if (countY === size) {
      console.log(`Win Player_2`);
      console.log(matrix);
      return true;
    }
  }

  for (let i = 0; i < size; i++) {
    let countX = 0;
    let countY = 0;

    if (matrix[i][i] === "X") {
      countX += 1;
    } else if (matrix[i][i] === "O") {
      countY += 1;
    }
    if (countX === size) {
      console.log(`Win Player_1`);
      console.log(matrix);
      return true;
    } else if (countY === size) {
      console.log(`Win Player_2`);
      console.log(matrix);
      return true;
    }
  }

  let countX = 0;
  let countY = 0;
  for (let j = 2, i = 0; j >= 0; j--, i++) {
    if (matrix[i][j] === "X") {
      countX += 1;
    } else if (matrix[i][j] === "O") {
      countY += 1;
    }
  }
  if (countX === size) {
    console.log(`Win Player_1`);
    console.log(matrix);
    return true;
  } else if (countY === size) {
    console.log(`Win Player_2`);
    console.log(matrix);
    return true;
  }
}

// MAIN FUNCTION

function runTicTacToe(size) {
  // create matrix array (size x size)
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = "";
    }
  }

  for (let outIndex = 1; outIndex <= Math.pow(size, 2); outIndex++) {
    let coordinateX = prompt("Input Coordinate X: ");
    if (
      typeof coordinateX === typeof null ||
      coordinateX < 0 ||
      coordinateX > 2
    ) {
      return `Error: wrong X value`;
    }
    let coordinateY = prompt("Input Coordinate Y: ");
    if (
      typeof coordinateY === typeof null ||
      coordinateY < 0 ||
      coordinateY > 2
    ) {
      return `Error: wrong Y value`;
    }

    coordinateX = Number(coordinateX);
    coordinateY = Number(coordinateY);

    if (
      matrix[coordinateX][coordinateY] !== "" ||
      matrix[coordinateX][coordinateY] === "X" ||
      matrix[coordinateX][coordinateY] === "O"
    ) {
      console.log("Please repeat, Your input coordination was full");
      outIndex -= 1;
      continue;
    }

    if (outIndex % 2 !== 0) {
      matrix[coordinateX][coordinateY] = "X";
      if (checker(matrix, size)) {
        break;
      }
    } else {
      matrix[coordinateX][coordinateY] = "O";
      if (checker(matrix, size)) {
        break;
      }
    }
  }
}

let size = 3;
console.log(runTicTacToe(size));
