class Bubble {
    constructor(x, y, r = 50) {
        this.location = createVector(x, y);
        this.r = r;
        this.brightness = 0;
        this.color = 255;
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

    clicked() {

    }

    move() {
        this.location.x += random(-2, 2);
        this.location.y += random(-2, 2);
    }

    show() {
        push();
        stroke(this.color);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.location.x, this.location.y, this.r * 2);
        pop();
    }
}