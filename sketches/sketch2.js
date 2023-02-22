
//Sketch two
var c;

function setup() {
    createCanvas(windowWidth, windowHeight);
    c = color(random(0,255),random(0,255),random(0,255),random(100,255))
    background('black');

}
  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  

function draw() {

  const x = width / 2;
  const y = height / 2;
  
  const diameter = min(width, height) * 0.5;
  
  fill(c);
  noStroke();
  
  circle(x, y, diameter);
}

