////P5.Play Library installed

const game = new Game();
function setup() {
  game.setup();
}

function draw() {
  clear();
  game.draw();

  //////Stages
  // if (stage == 0) {
  //   //////Check this later
  //   game();
  // }
}

function preload() {
  bgClouds = loadImage("./Assets/bgClouds.jpg");
  skyDiver = loadImage("./Assets/skyDiver.png");
  obstacle1 = loadImage("./Assets/ufoShip.png");
  obstacle2 = loadImage("./Assets/fatBird.png");
  coinPoint = loadImage("./Assets/coinPoint.png");
  coinTouch = loadSound("./Assets/coinTouch.m4a"); 
  soundtrack = loadSound("./Assets/soundtrack.m4a")
}

function keyPressed() {
  game.keyPressed();
  
}