class Game {
  constructor() {
    this.background = new Background();
    this.obstacles = [];
    this.player = new Player();
    this.points = [];
  }
  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }
  draw() {
    clear();
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
      if (obstacle.y - obstacle.height < 0) {
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
    });
  }

  //Collision Check
  collisionCheck(player, points) {
    if (player.bottomSide < points.topSide) {
      return false;
    }

    if (player.rightSide < points.leftSide) {
      return false;
    }

    if (player.leftSide > points.rightSide) {
      return false;
    }

    if (player.topSide > points.bottomSide) {
      return false;
    }

    return true;
  }
}
