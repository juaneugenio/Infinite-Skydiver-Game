class Player {
  constructor() {
    this.x = CANVAS_WIDTH / 2.3;
    this.y = 0;
    this.height = 60;
    this.width = 65;
    this.rightBoundary = CANVAS_WIDTH - this.width;
    this.bottomBoundary = CANVAS_HEIGHT - this.height;
  }

  draw() {
    this.deceleration();
    this.move();
    this.maintainBoundaries();
    image(skyDiver, this.x, this.y, this.width, this.height);
  }
  deceleration() {
    this.y -= 5.5;
  }
  move() {
    if (keyIsDown(LEFT_ARROW)) {
        this.x -= 7;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        this.x += 7;
    }
    if (keyIsDown(UP_ARROW)) {
        this.y -= 6;
    }
    if (keyIsDown(DOWN_ARROW)) {
        this.y += 8;
    }
  }
  maintainBoundaries() {
    // CAN't GO OVER THE LEFT SIDE
    if (this.x <= 0) {
        this.x = 0;
    }
    // CAN'T GO OVER ON THE RIGHT SIDE
    if (this.x >= this.rightBoundary) {
        this.x = this.rightBoundary;
    }

    // CAN'T GO OVER THE TOP SIDE
    if (this.y <= 0) {
        this.y = 0;
    }
    // CAN'T GO OVER ON THE BOTTOM SIDE
    if (this.y >= this.bottomBoundary) {
        this.y = this.bottomBoundary;
    }
  }
  //for the collision
  get bottomSide() {
    return this.y + this.height;
  }

  get topSide() {
    return this.y;
  }

  get leftSide() {
    return this.x;
  }
  get rightSide() {
    return this.x + this.width;
  }
}
