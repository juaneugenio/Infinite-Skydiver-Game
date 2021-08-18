////P5.Play Library installed

const game = new Game();
let stage = 0;

function setup() {
  game.setup();

}

function splash(){
  image(bgClouds, 0, 0, 900, 1200);
  image(skyDiver, 240, 230, 150, 150);
  image(arrowKeys, 80,500,80,80);
  fill(0, 191, 255);
  stroke(255,255,255);
  strokeWeight(10);
  textSize(70);
  text("Infinit Skydiver", 80, 150);
  fill(0, 0, 128);
  noStroke();
  textSize(40);
  text("How to play", 200, 450);
  textSize(30);
  text("Press the arrows to move.", 180, 560);
}
function winDisplay(){
  image(bgClouds, 0, 0, 900, 1200);
  image(youWin, 80, 230, 500,300);
}
function loseDisplay() {
  image(bgClouds, 0, 0, 900, 1200);
  image(youLose, 100, 230, 400, 250);
}

function draw() {
  //clear();
  if (stage == 0) {
    splash();
  } //Verify the clear for looping audio bg
  if (stage == 1) {
    clear();
    game.draw();
  }

  if (stage == 2) {
    winDisplay();
  }
  if (stage == 3) {
    loseDisplay();
  }
  //Triggering Stages
  if (keyCode == 32) {
    stage = 1;
  }
  //Triggering winDisplay
  if (game.score >= 100) {
    stage = 2;
  }
  // if(this.player.sizeIncrement() >= 300){
  //   stage = 3;
  // }
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

// function keyPressed() {
//   game.keyPressed();
  
// }