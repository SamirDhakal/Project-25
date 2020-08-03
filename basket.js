class Basket {
    constructor(x, y, width, height) {
        var options= {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, 650, 615, 237, 125);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
    }
}