
//Sketch five

let mySound;
let fft;

function preload() {
  mySound = loadSound("ReignoftheTargaryens.mp3");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  fft = new p5.FFT();
  fft.setInput(mySound);

  startButton = createButton("start");
  startButton.mousePressed(start);

  stopButton = createButton("stop");
  stopButton.mousePressed(stop);
}

function start() {
  mySound.loop();
}

function stop() {
  mySound.stop();
}

function draw() {


  const data = fft.waveform();

  background(0);
  fill(255);
  noStroke();

  
  for (let i = 0; i < data.length; i++) {
    const x = map(i, 0, 128, 0, windowWidth);
    const y = map(data[i], -1, 1, windowHeight, 10);
    ellipse(x, y, 4, 4);
  }
}
