

// sketch 7


let currX = 0;
let currY = 0;
let circleSize;
var heightArr = [];
var widthArr = [];
var xCoordArr = [];
var yCoordArr = [];

var allBlocks = [];
var width = 0;
var height = 0;
var currColor = 0;
const gridSize = 16;
var diameter;

var hArr = [];
var sArr = [];
var vArr = [];
var hue = 0;
var saturation = 0;
var value = 0;
var gameBoard = [];
var currBlock;
var firstGame = true;

function setup() {
  createCanvas(windowWidth, windowHeight);




  gameBoard = new Array(gridSize);
  for (var i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = [];
  }

  for (var i = 0; i < gameBoard.length; i++) {
    for (var j = 0; j < gameBoard.length; j++) {
      gameBoard[i][j] = false;
    }
  }
  
  hue = random(0, 255);
  saturation = random (0, 255);
  value = random (0, 255)
  currColor = color(hue, saturation, value);


  diameter = min(windowWidth, windowHeight) / gridSize;

  drawGameBoard();
  makeNewBlock();


  startButton = createButton("debugging tool for stopping");
  startButton.mousePressed(start);

 
}



function start() {
  noLoop()
}




function draw() {
  

  for (let j = 0; j < gridSize - 1; j++) { 
    if (gameBoard[0][j]) {
      currBlock = {};
      allBlocks = [];
      makeNewBlock();
      firstGame = false;
      for (let i = 0; i < gridSize - 1; i++) {
        for (let z = 0; z < gridSize - 1; z++) {
          gameBoard[i][z] = false
        }
      }
    }
  }

  frameRate(.5)

  drawGameBoard();


  //creates the block the player is currently controlling and continuosly shifts it down
  let blocks = currBlock.blocks
  fill(currBlock.h, currBlock.s, currBlock.v);
  for (let i = 0; i < blocks.length; i++) {
    rect(blocks[i].xPos, blocks[i].yPos, diameter, diameter)
    blocks[i].yPos += diameter
    
  }

  //creates the blocks that are already stacked
  for(let i = 0; i < allBlocks.length; i++) {
    let blockItr = allBlocks[i];
    
    let coords = blockItr.blocks

    fill(blockItr.h, blockItr.s, blockItr.v)
    for (let j = 0; j < coords.length; j++) {
      if (firstGame) {
        rect(coords[j].xPos, coords[j].yPos - diameter, diameter, diameter)
      } else {
        rect(coords[j].xPos, coords[j].yPos, diameter, diameter)
      }

    }
  }


  // checks if our current block is going to stack on any previous blocks
  let b = currBlock.blocks
  for (let z = 0; z < b.length; z++) {
    let y = round(b[z].yPos / diameter) - 1
    let x = round(b[z].xPos / diameter)
    
    if (y == gridSize - 1) {
      y--;
    }
    if (x == gridSize - 1) {
      x--;
    }

    if (gameBoard[y + 1][x]) {
      fill(currBlock.h, currBlock.s, currBlock.v);

      for (let j = 0; j < b.length; j++) {
        let y2 = round(b[j].yPos / diameter) - 1
        let x2 = round(b[j].xPos / diameter)

        if (y2 == gridSize - 1) {
          y--;
        }
        if (x2 == gridSize - 1) {
          x--;
        }
        gameBoard[y2][x2] = true;
        console.log(gameBoard)

      

      }


      
      allBlocks.push(currBlock)
  
      
      let blocks = currBlock.blocks
  
  
      makeNewBlock();
      break


    }


    


  }

  



  //checks if block reached the bottom of the board (for some reason the width variable maps to the height, IDK why it's
  // a very strange bug)
  width++
  if (width == gridSize + 1) {
    allBlocks.push(currBlock)

    
    let blocks = currBlock.blocks

    for (let j = 0; j < blocks.length; j++) {
      let y = round(blocks[j].yPos / diameter) - 1
      let x = round(blocks[j].xPos / diameter)

      gameBoard[y][x] = true;
    }
    console.log(gameBoard)


    fill(currBlock.h, currBlock.s, currBlock.v);
    


    
  


    makeNewBlock();
  }





}


//Makes a new block for the user and stores the previous block into memory 
function makeNewBlock() {


  // generates a random color
  hue = random(0, 255);
  saturation = random (0, 255);
  value = random (0, 255);

  fill(color(hue, saturation, value));

  //generates a random starting position for the block
  let startingXPos = diameter * round(random(1, gridSize - 4));
  let yPos = 0;

  currBlock = {}
  var coordArr = [];



  width = round(random(1, 3));
  height = round(random(1, 4));
  //generates a block by randomly choosing the amount of rectangles it will have

  for (let j = 0; j < width; j++) {
    xPos = startingXPos;
    for (let i = 0; i < height; i++) {
      
      if (round(random(2, 5)) == 2) {
        continue;
      }
      var singeBlock = {};
      singeBlock["xPos"] = xPos;
      singeBlock["yPos"] = yPos;

      rect(xPos, yPos, diameter, diameter)
      xPos += diameter;
      
      coordArr.push(singeBlock);
    }
    yPos += diameter;
  }

  currBlock['blocks'] = coordArr;
  currBlock['h'] = hue;
  currBlock['s'] = saturation;
  currBlock['v'] = value;
}

function keyPressed() {

  if (keyCode == RIGHT_ARROW) {
    shiftCurrBlock(1)
  } else if (keyCode == LEFT_ARROW) {
    shiftCurrBlock(-1)
  }
}


// used in the draw function to continously draw the game board
function drawGameBoard() {

  stroke(5);
  fill('gray')
  let y = 0;
  for (var i = 0; i < gridSize; i++) { 
    let x = 0;
      for (var j = 0; j < gridSize; j++) {
          square(x, y, diameter);
          x += diameter;
      }
    y += diameter;
  } 
}

// prints out a string representation of the 2d array gameboard
function gameBoardToString(gameBoard) {
  for (var i = 0; i < gameBoard.length; i++) {
    for (var j = 0; j < gameBoard.length; j++)
    {
        console.log(gameBoard[i][j] + " ");
    }
    console.log("\n");
  }
}

// shifts the current block along the x-axis depending on user input
function shiftCurrBlock(shiftX) {
  drawGameBoard();
  frameRate(5)
  let blocks = currBlock.blocks

  for (i = 0; i < blocks.length; i++) {

    blocks[i].xPos += diameter * shiftX
    rect(blocks[i].xPos, blocks[i].yPos, diameter, diameter)

  }
}