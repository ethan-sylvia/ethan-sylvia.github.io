

//sketch three

var diaArr = [];
var dia = 1;
var grow = true;
const maxDia = 500 

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 300; i++) {
        diaArr.push(i);
    }
    background('black');

  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
  
    const x = width / 2;
    const y = height / 2;
    
    var diameter = 1;
    
    fill(color(random(0,255),random(0,255),random(0,255),random(100,255)));
    noStroke();
    console.log(diaArr[1]);

    if (dia > 100) {
      grow = false
    }
    if (dia < 0) {
      grow = true
    }
    
    if (grow) {
      dia += 1
    } else {
      dia -= 1
    }
    circle(x, y, dia);


}
  
