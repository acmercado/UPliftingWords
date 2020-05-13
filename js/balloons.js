class Balloon {
  constructor(_xPos, _yPos, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.size = _size;
  }

  display() {
    push();
      noStroke();
      fill(255, 0, 0);
      translate(this.xPos, this.yPos);
      scale(this.size);
      ellipse(0, 0, width * .04, height * .08);

      stroke(140);
      line(width * 0, height * 0.04, width * 0, height * .18);

      noStroke();
      beginShape();
        vertex(width * -0.005, height * .05);
        vertex(width * 0, height * .038);
        vertex(width * .005, height * .05);
      endShape(CLOSE);
    pop();
  }

  move (){
    // falling
    if (this.yPos <= height * 1.5){
      this.yPos += 3.5;
    } else {
      this.yPos = -height * 0.5;
    }
  }

}
