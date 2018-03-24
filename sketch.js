let bubbles = [];
let popper = [];
var score = 0;
var rate = 0.1;

let gui;

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


  popper.push(new Popper(400, 200, 10));


  //noCursor();


}

function draw() {
  // put drawing code here
  background('teal');



  for (p of popper) {
    p.show();
    p.move();

    for ([i, b] of bubbles.entries()) {
      if (b.intersects(p)) {
        p.bounce(b);
        b.hit();
        if (b.health <= 0) {
          bubbles.splice(i, 1);
          score++;
        }
      }
    }
  }


  for ([i, b] of bubbles.entries()) {
    b.show();
    b.move();
    //for(other of bubbles) {
    /* if (b.intersects(popper)) {
      popper.bounce(b);
      //b.changeColor(100);
      bubbles.splice(i, 1);
      score++;
    } else {
      b.changeBrightness(0);
    } */
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
  let h = floor(random(1, 10));
  list.push(new Bubble(x, y, r, h));
}

function spawn(list) {
  setTimeout(() => {
    generateRandom(list);
    spawn(list);
    //console.log(1000+(rate/list.length))
    //console.log("new! time till next : " + (500+Math.exp(list.length*rate)))
  }, 500 + Math.exp(list.length * rate));
}