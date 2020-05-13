class Cloud {
  constructor(_xPos, _yPos, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.size = _size;
  }

  display() {
    push();
      noStroke();
      fill(255);
      translate(this.xPos, this.yPos);
      scale(this.size);
      ellipse(width * 0.0, height * 0.0, width * .1, height * .08);
      ellipse(width * -0.045, height * -0.01, width * .06, height * .05);
      ellipse(width * 0.04, height * 0.02, width * .06, height * .04);

      ellipse(width * 0.03, height * 0.06, width * .02, height * .01);

      ellipse(width * 0.1, height * 0.1, width * .08, height * .06);
      ellipse(width * 0.13, height * 0.09, width * .05, height * .03);
      ellipse(width * 0.06, height * 0.11, width * .05, height * .04);
    pop();
  }

  move (){
    // sliding
    if (this.xPos <= width * 1.1){
      this.xPos += 1;
    } else {
      this.xPos = -width * 0.5;
    }
  }

}
