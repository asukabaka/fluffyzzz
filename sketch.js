let angle = 0;
let mic;
let myFont;

let ellipseObject1;

function preload() {
  myFont = loadFont('Pangolin-Regular.ttf');
}

function setup() {
  createCanvas(400, 300);
    // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  
  ellipseObject1 = new Ellipse(80);
}

function draw() {
  background(map(mouseY,0,400,120,240),255,255);
  
  drawShadow();
  drawTail();
  drawPawsback();
  drawBody();
  drawFur();
  drawPawsfront();
  drawEars();
  drawHead();
  
  // now display and move BOTH your ellipse objects
  ellipseObject1.display();
  ellipseObject1.grow(); 
  
  push();
  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  textSize(52);
  fill(205, 163, 92);
  textFont(myFont);
  text('zZz', width / 2, h - 190);
  pop();
  
}



function drawShadow(){
  //shadow
  push();
    noStroke()
    fill(178, 165, 156);
    rect(70, 240, 270, 30, 60, 55, 50, 55);
    rect(55, 240, 240, 40, 60, 55, 50, 55);
    rect(60, 245, 170, 40, 60, 55, 50, 55);
  pop();
}

function drawTail(){
  //tail
  push();
    noStroke();
  
    if (mouseY < height/2) {
    fill(205, 163, 92);
    arc(280, 210, 130, 100, 0, PI + QUARTER_PI, CHORD);
    fill(247, 228, 148);
    arc(280, 200, 40, 100, 0, PI + QUARTER_PI, CHORD);
    } else {
      fill(205, 163, 92);
    arc(280, 213, 130, 100, 0, PI + QUARTER_PI, CHORD);
    fill(247, 228, 148);
    arc(280, 203, 40, 100, 0, PI + QUARTER_PI, CHORD);
    }
  pop();
}
  
function drawPawsback(){
  //paws back
  push();
    noStroke();
    fill(195, 153, 82);
    circle(250,240,65);
    circle(170,240,85);
  pop();
}
  
function drawBody(){
  //body
  push();
  
  if (mouseY < height/2) {
    let d1 = 50 + (sin(angle) * height) / 40 + height / 5;
    noStroke()
    fill(205, 163, 92);
    rect(100, 150, 170, d1, 60, 55, 50, 55);
    angle += 0.02;
  } else { let d1 = 50 + (sin(angle) * height) / 40 + height / 5;
    noStroke()
    fill(205, 163, 92);
    rect(100, 153, 170, d1, 60, 55, 50, 55);
    angle += 0.02;
  }
  pop();
}
  
function drawFur(){
  //fur
  push();
    noStroke()
  if (mouseY < height/2) {
    fill(247, 228, 148);
    rect(50, 140, 170, 140, 60, 55, 50, 55);
  } else {
    fill(247, 228, 148);
    rect(50, 143, 170, 140, 60, 55, 50, 55);
  }
    
  pop();
}
  
function drawPawsfront(){
  //paws
  push();
    let h1 = 225 + (sin(angle) * height) / 120 + height / 20;
    let h2 = 230 + (sin(angle) * height) / 120 + height / 20;
    noStroke();
    fill(195, 153, 82);
    circle(180,h1,90);
    circle(85,h2,80);
  pop();
}
  
function drawEars(){
  //ears
  push();
    let h1 = 110 + (sin(angle) * height) / 120 + height / 20;
    let h2 = 75 + (sin(angle) * height) / 120 + height / 20;
    noStroke()
    fill(205, 163, 92);
    rect(20, h1, 80,80, 200, 55, 200, 55);
    rect(80, h2, 100,100, 200, 55, 200, 55);
    fill(229, 148, 148);
    rect(40, 150, 40,40, 200, 55, 200, 55);
    rect(100, 110, 60,60, 200, 55, 200, 55);
  pop();
}
  
function drawHead(){
  //head
  push();
    let h1 = 190 + (sin(angle) * height) / 120 + height / 20;
    let d3 = 165 + (sin(angle) * height) / 120 + height / 20;
    noStroke();
    fill(215, 173, 102);
    circle(120,h1,150);
  pop();

  //eyes
  push();
    let h2 = 195 + (sin(angle) * height) / 120 + height / 20;
    let h3 = 165 + (sin(angle) * height) / 120 + height / 20;
    strokeWeight(2);
    if (mouseY < height/2){
    noFill();
    arc(75, h2, 80, 80, QUARTER_PI, HALF_PI);
    arc(125, h3, 100, 100, QUARTER_PI, HALF_PI);
    } else { 
    fill (75,60,60,75);
    arc(75, h2, 80, 80, QUARTER_PI, HALF_PI, OPEN);
    arc(125, h3, 100, 100, QUARTER_PI, HALF_PI, OPEN);
    }
  pop();
  
  //nose
  push();
    noStroke();
    fill(75,60,60);
    triangle(112, 245, 112, 240, 122, 243);
  pop();
  
  
  //mouth
  push();
    let d1 = 1 + (sin(angle) * height) / 80 + height / 20;
    noStroke();
    fill(229, 148, 148);
    circle(125,255,d1);
  pop();
} 
  
  