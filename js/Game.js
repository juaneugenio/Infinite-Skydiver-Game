class Game {
  constructor() {
    this.background = new Background();
    this.obstacles = [];
    this.player = new Player();
    this.points = [];
    this.score = 0;
  }
  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    soundtrack.loop();
    soundtrack.setVolume(0.3);
  }
  draw() {
    clear();
    this.background.draw();
    this.player.draw();

    //OBSTACLES  RANDOMLY CREATION
    if (frameCount % 30 === 0) {
      let swapObstacles;
      if (this.obstacles.length % 2 === 0) {
        swapObstacles = obstacle1;
      } else {
        swapObstacles = obstacle2;
      }
      this.obstacles.push(new Obstacle(swapObstacles));
    }

    //OBSTACLES ERASE OFF THE CANVAS AND COLLISION WITH PLAYER.
    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();
      if (obstacle.y + obstacle.height <= 0) {
        this.obstacles.splice(index, 0);
      }
      if (this.collisionObstacle(this.player, obstacle)) {
        this.player.sizeIncrement();
        //this.obstacles.splice(index, 1); <------CHECK THIS
      }
    });

    //GAME WIN. ALL POINTS COLLECTED.
    if (this.score >= 100) {
      soundtrack.stop();
      fill(220, 20, 60);
      rect(0, 250, CANVAS_WIDTH, 350);
      image(youWin, 120, 270, 430, 250);
      fill(255, 255, 255);
      noStroke();
      textSize(25);
      text("RELOAD page to restart.", 200, 550);
      noLoop();
    }

    //GAME OVER. PLAYER SIZE INCREMENT.
    if (this.player.width >= 500) {
      soundtrack.stop();
      fill(47, 79, 79);
      rect(0, 250, CANVAS_WIDTH, 350);
      image(youLose, 200, 275, 210, 140);
      fill(173, 255, 47);
      noStroke();
      textSize(30);
      text("Admit it!", 260, 480);
      text("You are too big to continue", 150, 515);
      fill(255, 255, 255);
      noStroke();
      textSize(25);
      text("RELOAD page to restart.", 200, 560);
      noLoop();
    }

    //COINS RANDOMLY CREATION
    if (frameCount % 50 === 0) {
      this.points.push(new Point());
    }

    //COINS ERASE OFF THE CANVAS AND COLLISION WITH PLAYER.
    this.points.forEach((point, index) => {
      point.draw();
      if (point.y + point.height <= 0) {
        this.points.splice(index, 1);
      }
      if (this.collisionCollect(this.player, point)) {
        this.score++;
        coinTouch.play();
        this.points.splice(index, 1);
      }
    });

    //SCOREBOARD DISPLAY ON CANVAS.
    fill(255, 153, 51);
    stroke(0);
    strokeWeight(3);
    textSize(30);
    text("Score: ", 20, 50);
    text(this.score, 115, 50);
  }

  splashScreen() {
    image(bgClouds, 0, 0, 900, 1200);
    image(skyDiver, 220, 220, 180, 150);
    image(arrowKeys, 80, 500, 80, 80);
    image(coinPoint, 100, 595, 40, 35);
    image(obstacle1, 100, 680, 40, 35);
    image(obstacle2, 100, 720, 40, 35);
    fill(0, 191, 255);
    stroke(255, 255, 255);
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
    text("Collect 100 points avoiding obstacles.", 180, 625);
    textSize(25);
    fill(70, 130, 180);
    text("Every time you collide with an obstacle", 180, 695);
    textSize(25);
    fill(70, 130, 180);
    text("you get bigger and bigger until you can", 180, 725);
    textSize(25);
    fill(70, 130, 180);
    text("no longer avoid them.", 180, 755);
    fill(184, 134, 11);
    noStroke();
    textSize(40);
    text("Press SPACE to start!", 130, 830);
  }

  //COLLISION CHECK FOR COLLECTIG POINTS.
  collisionCollect(player, point) {
    if (player.bottomSide < point.topSide) {
      return false;
    }
    if (player.rightSide < point.leftSide) {
      return false;
    }
    if (player.leftSide > point.rightSide) {
      return false;
    }
    if (player.topSide > point.bottomSide) {
      return false;
    }
    return true;
  }
  //COLLISION CHECK FOR OBSTACLES.
  collisionObstacle(player, obstacle) {
    if (player.bottomSide < obstacle.topSide) {
      return false;
    }
    if (player.rightSide < obstacle.leftSide) {
      return false;
    }
    if (player.leftSide > obstacle.rightSide) {
      return false;
    }
    if (player.topSide > obstacle.bottomSide) {
      return false;
    }
    return true;
  }
}
