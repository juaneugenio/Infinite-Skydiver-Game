class Point {
  constructor() {
    this.x = random(0, CANVAS_WIDTH - 60);
    this.y = random(920, CANVAS_HEIGHT);
    this.width = 50;
    this.height = 40;
    this.eraseCoin = false;
    //this.sound = coinTouch;
  }
  draw() {
    this.y -= 3;
    image(coinPoint, this.x, this.y, this.width, this.height);
  }
  remove() {
    this.eraseCoin = true;
    ///this.sound= asociate the sound here?
  }

  
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
