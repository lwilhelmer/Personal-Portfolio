
let canvas;
let xPos = 0;
let yPos = 0;
let easing = 0.5;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    // canvas.style("z-index", -2)
    // background(225);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);
    drawThing(xPos, yPos);
}


function drawThing(_x, _y) {
    noStroke();
    fill(255, 100, 100);
    ellipse(_x, _y, 60, 60);
    fill(255, 255, 100);
    ellipse(_x, _y, 40, 40);
    fill(100, 200, 255);
    ellipse(_x, _y, 20, 20);
}

