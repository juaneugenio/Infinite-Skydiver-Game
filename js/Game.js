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
    soundtrack.play();
    soundtrack.setVolume(0.3);
    //soundtrack.loop();
  }
  draw() {
    //console.log("boom", this.obstacles.length);
    this.background.draw();
    this.player.draw();

    //Obstacle random and swap.

    if (frameCount % 30 === 0) {
      let swapObstacles;
      if (this.obstacles.length % 2 === 0) {
        swapObstacles = obstacle1;
      } else {
        swapObstacles = obstacle2;
      }

      this.obstacles.push(new Obstacle(swapObstacles));
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();
      if (obstacle.y + obstacle.height <= 0) {
          this.obstacles.splice(index, 0);
      }
      if(this.collisionObstacle(this.player, obstacle)) { ////<------ Collision obstacle to implement
        this.player.sizeIncrement();
        soundtrack.stop();
      }
    });

    // PointCoins random display

    if (frameCount % 50 === 0) {
      this.points.push(new Point());
    }
    this.points.forEach((point, index) => {
      point.draw();
      if (point.y + point.height <= 0) {
        this.points.splice(index, 1);
      }
      //this.points.forEach((point) => {
        if (this.collisionCollect(this.player, point)) {
          point.remove();
          this.score++;
          coinTouch.play();
          scoreHolder.innerText = this.score;
          this.points.splice(index, 1);
        }
      //});
    });
  }

  //Collision Check for collecting points
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
  //Collision Obstacles
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
