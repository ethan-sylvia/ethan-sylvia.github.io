
//sketch 6
var mySound;


function preload() {
  mySound = loadSound("ReignoftheTargaryens.mp3");
  fft = new p5.FFT();
  fft.setInput(mySound);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  amp = new p5.Amplitude();

}

function mousePressed() {
  if (mySound.isPlaying() ) { 
    mySound.stop();
  } else {
    mySound.play();
  }
}



function draw() {
  const data = fft.waveform();

  background(0);
  fill(255);
  noStroke();
  let level = amp.getLevel();
  // adjust map values to taste; actual levels
  // tend to be between 0 and 0.5
  let barHeight = map(level, 0, 0.25, 0, height);
  
  ellipse(mouseX, mouseY, barHeight, barHeight);
  
}

