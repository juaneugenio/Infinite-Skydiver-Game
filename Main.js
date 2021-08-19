////P5.Play Library installed

const game = new Game();
//let stage = 0;

function setup() {
  game.setup();

}

function splashScreen(){
  image(bgClouds, 0, 0, 900, 1200);
  image(skyDiver, 220, 220, 180, 150);
  image(arrowKeys, 80,500,80,80);
  image(coinPoint, 100, 595, 40, 35);
  image(obstacle1, 100, 680, 40, 35);
  image(obstacle2, 100, 720, 40, 35);
  fill(0, 191, 255);
  stroke(255,255,255);
  strokeWeight(10);
  textSize(70);
  text("Infinite Skydiver", 70, 150);
  fill(184, 134, 11);
  noStroke();
  textSize(40);
  text("How to play", 200, 470);
  textSize(25);
  fill(70, 130, 180);
  text("Press and hold the arrows to move.", 180, 560);
  textSize(25);
  fill(70, 130, 180);
  text("Collect points by avoiding obstacles.", 180, 625);
  textSize(25);
  fill(70, 130, 180);
  text(
    "Every time you collide with an obstacle",
    180,
    695
  );
  textSize(25);
  fill(70, 130, 180);
  text(
    "you get bigger and bigger until you can",
    180,
    725
  );
  textSize(25);
  fill(70, 130, 180);
  text("no longer avoid them.", 180, 755);
  fill(184, 134, 11);
  noStroke();
  textSize(40);
  text("Press SPACE to start!", 130, 830);
  
}

function draw() {
  if (stage == 0) {
    splashScreen();
  } //Verify the clear for looping audio bg
  if (stage == 1) {
    game.draw();
    //Triggering winDisplay
    if (game.score >= 100) {
      soundtrack.stop();
      rect(0, 250, CANVAS_WIDTH, 350);
      image(youWin, 120, 300, 430, 250);
      noLoop();
    }
    // if (player.width >= CANVAS_WIDTH) {
    //   soundtrack.stop();
    //   rect(0, 250, CANVAS_WIDTH, 350);
    //   image(youLose, 190, 310, 260, 200);
    //   noLoop();
    // }
  }

  // if (stage == 2) {
  //   //game.draw();
  //   noLoop();
  //   soundtrack.stop();
  //   rect(0,250,CANVAS_WIDTH,350)
  //   image(youWin, 120, 300, 430, 250);
    
  // }
  //Triggering Stages
  if (keyCode == 32) {
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

// function keyPressed() {
//   game.keyPressed();
  
// }