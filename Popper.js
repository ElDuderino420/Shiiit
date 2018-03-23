class Popper {
    constructor(x, y, r = 50) {
        this.location = createVector(x, y);
        this.r = r;
        this.brightness = 0;
        this.color = 255;
        this.timer = 50;
        this.speed = 5;
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0, 0)
        this.xvel = 0;
        this.yvel = 0;
        this.d = 0;
        this.target = createVector(width/2, height/2);
        this.bouncing = false;
        this.history = [];
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

    contains(px, py) {
        let d = dist(px, py, this.location.x, this.location.y);
        return d < this.r;
    }

    clicked() {

    }

    bounce() {
        let t = this.target;
        this.target = createVector(-this.target.x, -this.target.y)
        setTimeout(() => {
            this.target = t;
            this.bouncing = false;
        }, 500);
    }

    move() {
        let v = createVector(this.location.x, this.location.y);
        this.history.push(v);
        if(this.history.length > 5) {
            this.history.splice(0, 1);
        }

        this.d = dist(this.location.x, this.location.y, this.target.x, this.target.y);
        console.log(this.d)
        //console.log(this.target)
        //console.log(this.d);
        //console.log(this.r);
        if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {

            let mouse = createVector(mouseX, mouseY);
            mouse.sub(this.location);
            mouse.setMag(2);
            this.acceleration = mouse;
            
            this.velocity.add(this.acceleration);
            this.location.add(this.velocity);
            this.velocity.limit(this.speed*2);

            /* this.setTarget(mouseX, mouseY);
            
            if (this.d >= this.r && !this.bouncing) {
                let r = this.speed / this.d;
                this.xvel = r * (this.target.x - this.x);
                this.yvel = r * (this.target.y - this.y);
            } else if (this.d < this.r) {
                this.xvel = 0;
                this.yvel = 0;
            }
            this.x += this.xvel*2;
            this.y += this.yvel*2; */



            //this.x = mouseX;
            //this.y = mouseY;

        } else {
            //console.log("nomouse")
            //console.log(this.d + ", " + this.r);
            //console.log(this.target)
            //this.setTarget(mouseX, mouseY);
            let a = createVector(this.target.x, this.target.y);
            a.sub(this.location);
            a.setMag(2);
            this.acceleration = a;
            
            this.velocity.add(this.acceleration);
            this.location.add(this.velocity);
            this.velocity.limit(this.speed);
            //console.log(this.d);
            if(this.d < this.r) {
                this.target = createVector(random(0, width), random(0, height));
                console.log(this.target);
            }

            /* if (this.d >= this.r && !this.bouncing) {
                let r = this.speed / this.d;
                this.velocity.x = r * (this.target.x - this.location.x);
                this.velocity.y = r * (this.target.y - this.location.y);
            } else if (this.d < this.r) {
                //console.log("GSDFHGJFHK")
                this.setTarget(random(0, width), random(0, height));
            }
            this.location.x += this.velocity.x;
            this.location.y += this.velocity.y; */


            
        }

    }

    show() {
        push();
        stroke(this.color);
        strokeWeight(4);
        fill(this.brightness, 125);
        let r = this.r
        for(var i = 0; i < this.history.length; i++) {
            let v = this.history[i];
            r++;
            //stroke(this.color);
            //strokeWeight(4);
            //fill(this.brightness, 125);
            ellipse(v.x, v.y, r);
        }

        
        ellipse(this.location.x, this.location.y, this.r * 2);

        

        pop();
    }
}