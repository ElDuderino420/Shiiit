let bubbles = [];
let popper;
let score = 0;
let rate = 1;
let timer = 1;

function setup() {
  // put setup code here
  createCanvas(800, 600);
  // generateRandom(bubbles);
  // setInterval(() => {
  //   if (bubbles.length < 1000000) {
  //     generateRandom(bubbles)
  //   }
  // }, 1000 / bubbles.length);
  spawn(bubbles);


  popper = new Popper(400, 200, 10);
  popper.changeColor('orangered');
  noCursor();
}

function draw() {
  // put drawing code here
  background('teal');


  if(mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0){
    popper.x = mouseX;
    popper.y = mouseY;
  } else if(timer < 0) {
    popper.move();
    timer = 1;
  } else {
    timer--;
  }
  
  popper.show();
  

  for ([i, b] of bubbles.entries()) {
    b.show();
    b.move();
    //for(other of bubbles) {
    if (b.intersects(popper)) {
      //b.changeColor(100);
      bubbles.splice(i, 1);
      score++;
    } else {
      b.changeBrightness(0);
    }
    //}

  }
  push();
  textSize(32);
  textAlign(RIGHT, TOP);
  textStyle(BOLD);
  fill('purple');
  strokeWeight(3);
  stroke('white')
  text('Score: ' + score, width - 10, 10);
  pop();
}


function mousePressed() {
  for ([i, b] of bubbles.entries()) {
    if (b.contains(mouseX, mouseY)) {
      b.clicked();
      bubbles.splice(i, 1);
    }
  }
}

function generateRandom(list) {
  let x = random(width);
  let y = random(height);
  let r = random(10, 50);
  list.push(new Bubble(x, y, r));
}

function spawn(list) {
  setTimeout(() => {
    generateRandom(list);
    spawn(list);
  }, 100*Math.exp(-rate/list.length));
}