const game = new Game();
let stage = 0;

function setup() {
  game.setup();
}

function draw() {
  if (stage == 0) {
    game.splashScreen();
  }
  if (stage == 1) {
    game.draw();
  }

  //SWITCH STAGES
  if (keyCode == 32) {
    stage = 1;
  }
  //PLAY AGAIN
  if (keyCode == 13) {
    stage = 1;
  }
}

function preload() {
  bgClouds = loadImage("./Assets/bgClouds.jpg");
  skyDiver = loadImage("./Assets/skyDiver.png");
  obstacle1 = loadImage("./Assets/ufoShip.png");
  obstacle2 = loadImage("./Assets/fatBird.png");
  coinPoint = loadImage("./Assets/coinPoint.png");
  arrowKeys = loadImage("./Assets/arrowKeys.png")
  youWin = loadImage("./Assets/youWin.png");
  youLose = loadImage("./Assets/youLose.png");
  coinTouch = loadSound("./Assets/coinTouch.m4a"); 
  soundtrack = loadSound("./Assets/soundtrack.m4a");
}