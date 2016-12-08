var owl2;
var cursive;
var i = 0;
var u = 0
var owl;

function preload(){
  owl2 = loadImage("img/owl2.png");
  owl = loadImage("img/owl.png");
  // cursive = loadFont("fonts/de.ttf");
}

function setup(){
  createCanvas(640, 580);
}

function draw(){
  background(0, 100, 200, 80);
  fill(0);
  textSize(100);
  textFont("Yellowtail");
  if(mouseIsPressed) {
    text("Decieved.", 300, 50);
    image(owl, i, 0, 0, 0);
    // i = i + 1;

  }

  if(mouseIsPressed) {
    background(200, 10, 255, 70);
  } else {

    image(owl2, u, 0, 0, 0);
    // u = u - 1
  }

  // image(owl, i, 0, 0, 0);
  // i = i + 1;
}
