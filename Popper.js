class Popper {
    constructor(x, y, r = 50) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
        this.color = 255;
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return (d < this.r + other.r);
    }

    changeColor(color) {
        this.color = color;
    }

    changeBrightness(bright) {
        this.brightness = bright;
    }

    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        return d < this.r;
    }

    clicked() {

    }

    move() {
        this.x = random(0, width);
        this.y = random(0, height);
    }

    show() {
        push();
        stroke(this.color);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
        pop();
    }
}