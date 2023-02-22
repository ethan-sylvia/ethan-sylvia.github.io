
let x = 0;
let y = 0;
let xList = [];
let yList = [];
let sList = [];
let cList = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    let width = windowWidth / 8;
    let height = windowHeight/ 8;
    xList.push(0);
    yList.push(0);
    for (let x = 1; x < 9; x++) {
        xList.push(width);
        yList.push(height);
        width = width + windowWidth / 8;
        height = height + windowHeight / 8;
        console.log(xList)
    }
}
  
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    let width = windowWidth / 8;
    let height = windowHeight/ 8;

    xList = []
    yList = []
    xList.push(0);
    yList.push(0);
    for (let x = 1; x < 9; x++) {
        xList.push(width);
        yList.push(height);
        width = width + windowWidth / 8;
        height = height + windowHeight / 8;
        console.log(xList)
    }
}

function draw() {

    const diameter = max(width, height) / 8;


    let count = 0;

    for (var i = 0; i < 8; i++) { 
      count++;
        for (var j = 0; j < 8; j++) {
            if (count % 2 == 0) {
                fill('white');
            } else {
                fill('Gray');
            }
            square(xList[j], yList[i], diameter);
        }

    } 
      

}
