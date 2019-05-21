let balls = [];

function setup() {
    createCanvas(windowWidth-20,400);
}

function draw() {
    background(0);

    for (let ball of balls) {
        ball.move();
        ball.show();
    }
}

function mousePressed() {
    let r = random(10,30);
    let red = random(0,256);
    let blue = random(0,256);
    let green = random(0,256);
    b = new Ball(mouseX, mouseY, r, red, green, blue);
    balls.push(b);
}
