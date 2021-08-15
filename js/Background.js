class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
  }
  draw() {
    this.y -= 2;
    // P5 Function (image, xValue, yValue, widthValue, heightValue)
    // Image number 1
    image(bgClouds, this.x, this.y, this.width, this.height);
    image(bgClouds, this.x, this.y + this.height, this.width, this.height);
    if (this.y <= -this.height) {
      this.y = 0;
    }
  }
}
