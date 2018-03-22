class Popper {
    constructor(x, y, r = 50) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
        this.color = 255;
        this.timer = 50;
        this.speed = 10;
        this.xvel = 0;
        this.yvel = 0;
        this.d = 0;
        this.target = false;

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
        setTimeout(() => {
            this.xvel = -this.xvel;
            this.yvel = -this.yvel;
        }, 100);
    }

    travel() {
        console.log("gra")
        this.target = true;
        let r = this.speed / this.d;
        this.xvel = r * (this.x - this.targetx);
        this.yvel = r * (this.y - this.targety);
        

    }

    move() {
        if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {
            this.targetx = mouseX;
            this.targety = mouseY;
            this.d = dist(this.x, this.y, this.targetx, this.targety);
            //console.log(this.targety)
            if (this.d <= this.r) {
                this.travel();
            }
            this.x += this.xvel;
            this.y += this.yvel;

        } else {
            if(!this.target) {
                this.targetx = random(0, width);
                this.targety = random(0, height);
                this.d = dist(this.x, this.y, this.targetx, this.targety);
                this.travel();
            }
            
            
            this.x += this.xvel;
            this.y += this.yvel;

            //push();
            //line(this.x, this.y, newx, newy);
            //pop();

            //this.x = newx;
            //this.y = newy;
            //this.timer = 50;
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