var distribution = new Array(1000);
var x = 0;
var offset = 0.01;

function setup() {
    createCanvas(500, 500);
    for (var i = 0; i < distribution.length; i++) {
        distribution[i] = floor(randomGaussian(0, 100));
    }
}

function draw() {
    
    background(204);
    translate(width / 2, width / 2);
    rotate(x);
    for (var i = 0; i < distribution.length; i++) {
        
        rotate(TWO_PI / distribution.length);
        stroke(0);
        //var dist = random(abs(distribution[i]));
        var dist = abs(distribution[i]*sin(i+x));
        //var dist = floor(map(sin(x), -1, 1, 100, 300));
        line(0, 0, dist, 0);
    }
    x += offset;

    
}

function mousePressed() {
    offset = -offset

}