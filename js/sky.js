'use strict';

let cloud1;
let cloud2;
let cloud3;
let cloud4;
let cloud5;
let cloud6;
let cloud7;
let cloud8;

let balloon1;
let balloon2;
let balloon3;
let balloon4;
let balloon5;
let balloon6;
let balloon7;
let balloon8;

function setup() {
  createCanvas (displayWidth, displayHeight);

  cloud1 = new Cloud(1, 1, 2);
  cloud2 = new Cloud(200, 550, 2);
  cloud3 = new Cloud(700, 480, 1);
  cloud4 = new Cloud(-100, 280, 1);
  cloud5 = new Cloud(800, 880, 1);
  cloud6 = new Cloud(-200, 800, 2);
  cloud7 = new Cloud(-700, 280, 2);
  cloud8 = new Cloud(-850, 600, 1);

  balloon1 = new Balloon(50, 70, 2);
  balloon2 = new Balloon(450, 320, 2);
  balloon3 = new Balloon(800, -50, 2);
  balloon4 = new Balloon(1100, 600, 2);
  balloon5 = new Balloon(700, 1000, 2);
  balloon6 = new Balloon(1400, 200, 2);
  balloon7 = new Balloon(1700, 800, 2);
  balloon8 = new Balloon(200, 770, 2);

}

function draw() {
  noStroke();
  background (122, 255, 251);

  cloud1.display();
  cloud2.display();
  cloud3.display();
  cloud4.display();
  cloud5.display();
  cloud6.display();
  cloud7.display();
  cloud8.display();

  cloud1.move();
  cloud2.move();
  cloud3.move();
  cloud4.move();
  cloud5.move();
  cloud6.move();
  cloud7.move();
  cloud8.move();

  balloon1.display();
  balloon2.display();
  balloon3.display();
  balloon4.display();
  balloon5.display();
  balloon6.display();
  balloon7.display();
  balloon8.display();

  balloon1.move();
  balloon2.move();
  balloon3.move();
  balloon4.move();
  balloon5.move();
  balloon6.move();
  balloon7.move();
  balloon8.move();

}
