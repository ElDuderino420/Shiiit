class Popper {
    constructor(x, y, r = 50) {
        this.location = createVector(x, y);
        this.r = r;
        this.brightness = 0;
        this.color = 'orangered';
        this.speed = 0.01;
        this.d = 0;
        this.target = createVector(random(0, width), random(0, height));
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

    bounce(bubble) {
        this.bouncing = true;
        this.t = this.target;
        let l = this.location; 
        p5.Vector.add(l, p5.Vector.sub(l, bubble.location).mult(2), this.target);

        setTimeout(() => {
            this.target = this.t;
            this.bouncing = false;
        }, 200);
    }

    move() {
        let v = createVector(this.location.x, this.location.y);
        this.history.push(v);
        if (this.history.length > 5) {
            this.history.splice(0, 1);
        }

        this.d = dist(this.location.x, this.location.y, this.target.x, this.target.y);

        if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {
            let speed = this.speed * 10;
            this.location = this.bouncing? p5.Vector.lerp(this.location, this.target, speed/2) : p5.Vector.lerp(this.location, createVector(mouseX, mouseY), speed);
            //this.location.x = lerp(this.location.x, mouseX, speed);
            //this.location.y = lerp(this.location.y, mouseY, speed);
            

        } else {
            if (this.d < this.r * 2) {
                this.target = createVector(random(0, width), random(0, height));

            }
            let speed = this.speed * 4
            this.location = this.bouncing? p5.Vector.lerp(this.location, this.target, speed/2) : p5.Vector.lerp(this.location, this.target, speed)
            
            
        }

    }

    show() {
        push();
        stroke(this.color);
        strokeWeight(4);
        fill(this.brightness, 125);
        let r = this.r
        for (var i = 0; i < this.history.length; i++) {
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