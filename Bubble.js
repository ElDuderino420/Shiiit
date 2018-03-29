class Bubble {
    constructor(x, y, r = 50, h = 1) {
        this.location = createVector(x, y);
        this.r = r;
        this.brightness = 0;
        this.background = 125;
        this.color = color(255, 255, 255);
        this.health = h;
        this.maxHP = h;
    }

    intersects(other) {
        let d = dist(this.location.x, this.location.y, other.location.x, other.location.y);
        return (d < this.r + other.r);
    }

    changeColor(color) {
        this.color = color;
    }

    changeBrightness(bright) {
        this.brightness = bright;
    }

    contains(p) {
        let d = dist(p, this.location);
        return d < this.r;
    }

    hit() {
        this.health--;
        this.background = lerp(this.background, 255, (1/this.maxHP));
    }

    move() {
        this.location.x += random(-2, 2);
        this.location.y += random(-2, 2);
    }

    show() {
        push();
        stroke(this.color);
        strokeWeight(4);
        fill(this.brightness, this.background);
        ellipse(this.location.x, this.location.y, this.r * 2);
        noStroke();
        fill(this.color);
        textAlign(CENTER, CENTER);
        text(this.health, this.location.x, this.location.y);
        pop();
    }
}