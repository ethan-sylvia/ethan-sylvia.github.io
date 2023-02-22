
//sketch 4

let x = 0;
let y = 0;
let circleSize;
var heightArr = [];
var widthArr = [];
var xCoordArr = [];
var counter = 0;
var width = 0;
var height = 0;
var currColor = 0;

var hArr = [];
var sArr = [];
var vArr = [];
var hue = 0;
var saturation = 0;
var value = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  noStroke(5);
  height = random(20,50);
  width = random(20,50);

  hue = random(0, 255);
  saturation = random (0, 255);
  value = random (0, 255)
  
  currColor = color(hue, saturation, value);

}

function draw() {
  background('gray');

  circleSize += 10;
  fill(currColor)
  rect(x, y, width, height);
  y += 1;

    for (var i = 0; i <= widthArr.length; i++) {
      fill(color(hArr[i], sArr[i], vArr[i]))
      rect(xCoordArr[i], windowHeight - heightArr[i], widthArr[i], heightArr[i])
    }
  

  
}



function keyPressed() {
  console.log(x)
  console.log(y)
  if (keyCode === DOWN_ARROW) {
    y += 20;
  } else if (keyCode === UP_ARROW) {
    y -= 20;
  } else if (keyCode == RIGHT_ARROW) {
    console.log(x)
    x += 20;
  } else if (keyCode == LEFT_ARROW) {
    x -= 20;
  }
  if (x < 0) {
    x = 0
  }
  if (y < 0) {
    y = 0
  }
  if (x > windowWidth - width) {
    x = windowWidth - width
  }
  if (y >= windowHeight - height) {
    xCoordArr.push(x);
    widthArr.push(width);
    heightArr.push(height);
    hArr.push(hue);
    sArr.push(saturation);
    vArr.push(value);

    height = random(20,50);
    width = random(20,50);
    x = random(0, windowWidth - 100);
    hue = random(0, 255);
    saturation = random (0, 255);
    value = random (0, 255);
    currColor = color(hue, saturation, value);



    y = 0;
  }
}