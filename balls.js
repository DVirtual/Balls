class Ball {
    constructor(x, y, r, red = 255, green = 255, blue = 255) {
        this.x = x;
        this.y = y;
        this.r = r;

        this.red = red;
        this.green = green;
        this.blue = blue;

        this.g = 9;
        this.vy = 0;
        this.e = -0.95;
        this.dt = 0.1;
    }

    move() {
        this.vy = this.vy + this.g * this.dt;
        this.y = this.y + this.vy * this.dt;

        if (this.y > height - this.r) {
            this.y = height - this.r;
            this.vy = this.e * this.vy;
        }
    }

    show() {
        stroke(255);
        strokeWeight(3);
        fill(this.red, this.green, this.blue, 120);
        ellipse(this.x, this.y, 2 * this.r);
    }
}
