////P5.Play Library installed

const game = new Game();
function setup() {
  game.setup();
}

function draw() {
  game.draw();
  //////Stages
  // if (stage == 0) {
  //   //////Check this later
  //   game();
  // }
}

function preload() {
  bgClouds = loadImage("./Assets/bgClouds.jpg");
  obstacle1 = loadImage("./Assets/ufoShip.png");
  obstacle2 = loadImage("./Assets/fatBird.png");
  skyDiver = loadImage("/Assets/skyDiver.png");
  coinPoint = loadImage("/Assets/coinPoint.png");
}
