class Player {
  constructor() {
    this.x = CANVAS_WIDTH / 2.3;
    this.y = CANVAS_HEIGHT / 2;
    this.height = 65;
    this.width = 70;
    this.rightBoundary = CANVAS_WIDTH - this.width;
    this.bottomBoundary = CANVAS_HEIGHT - this.height;
    //Question the Increment
    this.erasePlayer = false;
  }

  draw() {
    this.deceleration();
    this.move();
    this.maintainBoundaries();
    image(skyDiver, this.x, this.y, this.width, this.height);
    this.remove();

  }
  deceleration() {
    this.y -= 5.5;
  }
  remove() {
    this.erasePlayer = true;
  }
  sizeIncrement() {
    this.width += 0.6;
    this.height += 0.6;
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
    if (this.y <= 30) {
      this.y = 30;
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
