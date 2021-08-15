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
  }
  draw() {
    //console.log("boom", this.obstacles.length);
    this.background.draw();
    this.player.draw();
    if (this.collisionCheck(this.player, this.points)) {
      this.score++;
    }

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
    });

    // PointCoins random display

    if (frameCount % 60 === 0) {
      this.points.push(new Point());
    }
    this.points.forEach((point, index) => {
      point.draw();
      if (point.y + point.height < 0) {
        this.points.splice(index, 0);
      }
      this.points.forEach((point) => {
        if (this.collisionCheck(this.player, point)) {
          point.remove();
        }
      });
    });
    if (point.erasePoint) {
      this.point.splice(index, 1);
    }
  }

  //Collision Check
  collisionCheck(player, point) {
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
}
