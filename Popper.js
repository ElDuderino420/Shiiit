class Popper {
    constructor(x, y, r = 50) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
        this.color = 255;
        this.timer = 50;
        this.speed = 5;
        this.xvel = 0;
        this.yvel = 0;
        this.d = 0;
        this.target = {x: 0, y: 0};
        this.bouncing = false;
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

    bounce() {
        this.xvel = -this.xvel;
        this.yvel = -this.yvel;
        this.bouncing = true;
        setTimeout(() => {
            this.xvel = -this.xvel;
            this.yvel = -this.yvel;
            this.bouncing = false;
        }, 500);
    }

    travel() {
        console.log("gra")
        this.target = true;
    }

    setTarget(x, y) {
        this.target = { x: x, y: y };
    }

    move() {
        this.d = dist(this.x, this.y, this.target.x, this.target.y);

        //console.log(this.target)
        //console.log(this.d);
        //console.log(this.r);
        if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {
            this.setTarget(mouseX, mouseY);
            
            if (this.d >= this.r && !this.bouncing) {
                let r = this.speed / this.d;
                this.xvel = r * (this.target.x - this.x);
                this.yvel = r * (this.target.y - this.y);
            } else if (this.d < this.r) {
                this.xvel = 0;
                this.yvel = 0;
            }
            this.x += this.xvel;
            this.y += this.yvel;

        } else {
            //console.log("nomouse")
            //console.log(this.d + ", " + this.r);
            //console.log(this.target)
            //this.setTarget(mouseX, mouseY);
            if (this.d >= this.r && !this.bouncing) {
                let r = this.speed / this.d;
                this.xvel = r * (this.target.x - this.x);
                this.yvel = r * (this.target.y - this.y);
            } else if (this.d < this.r) {
                console.log("GSDFHGJFHK")
                this.setTarget(random(0, width), random(0, height));
            }
            this.x += this.xvel;
            this.y += this.yvel;
        }

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