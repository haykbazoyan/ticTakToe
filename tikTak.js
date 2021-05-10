// Tik Tak Toe
// player1.push([coordinateX, coordinateY]);

function checker(matrix) {
  for (let i = 0; i < 3; i++) {
    let countX = 0;
    let countY = 0;
    for (let j = 0; j < 3; j++) {
      if (matrix[i][j] === "X") {
        countX += 1;
      } else if (matrix[i][j] === "O") {
        countY += 1;
      }
    }
    if (countX === 3) {
      console.log(`Win Player_1`);
      console.log(matrix);
      return true;
    } else if (countY === 3) {
      console.log(`Win Player_2`);
      console.log(matrix);
      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    let countX = 0;
    let countY = 0;

    for (let j = 0; j < 3; j++) {
      if (matrix[j][i] === "X") {
        countX += 1;
      } else if (matrix[i][j] === "O") {
        countY += 1;
      }
    }
    if (countX === 3) {
      console.log(`Win Player_1`);
      console.log(matrix);
      return true;
    } else if (countY === 3) {
      console.log(`Win Player_2`);
      console.log(matrix);
      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    let countX = 0;
    let countY = 0;

    if (matrix[i][i] === "X") {
      countX += 1;
    } else if (matrix[i][i] === "O") {
      countY += 1;
    }
    if (countX === 3) {
      console.log(`Win Player_1`);
      console.log(matrix);
      return true;
    } else if (countY === 3) {
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
  if (countX === 3) {
    console.log(`Win Player_1`);
    console.log(matrix);
    return true;
  } else if (countY === 3) {
    console.log(`Win Player_2`);
    console.log(matrix);
    return true;
  }
}

function runTicTacToe(size) {
  let matrix = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  let player;

  for (let outIndex = 1; outIndex <= 9; outIndex++) {
    let coordinateX = prompt("Input Coordinate X: ");
    let coordinateY = prompt("Input Coordinate Y: ");

    if (
      typeof coordinateX === typeof null ||
      typeof coordinateY === typeof null
    ) {
      return -1;
    }

    if (coordinateX < 0 || coordinateX > 2) {
      return `Error: X`;
    } else if (coordinateY < 0 || coordinateY > 2) {
      return `Error: Y`;
    }

    coordinateX = Number(coordinateX);
    coordinateY = Number(coordinateY);

    let player1 = [];
    let player2 = [];

    if (
      matrix[coordinateX][coordinateY] !== "" ||
      matrix[coordinateX][coordinateY] === "X" ||
      matrix[coordinateX][coordinateY] === "O"
    ) {
      console.log("Please repeat, Your input coordination was full");
      outIndex -= 1;
      continue;
    }

    if (
      outIndex == 1 ||
      outIndex == 3 ||
      outIndex == 5 ||
      outIndex == 7 ||
      outIndex == 9
    ) {
      matrix[coordinateX][coordinateY] = "X";
      if (checker(matrix)) {
        break;
      }
    } else if (
      outIndex == 2 ||
      outIndex == 4 ||
      outIndex == 6 ||
      outIndex == 8
    ) {
      matrix[coordinateX][coordinateY] = "O";
      if (checker(matrix)) {
        break;
      }
    }
  }

  //return matrix;
}

const size = 6;
console.log(runTicTacToe(size));
