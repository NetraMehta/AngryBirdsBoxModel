class Bird{
    constructor(x, y){
        var options = {
            restitution:0.8,
            density:1.0,
            friction:0.3
        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.heigth = 50;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;

        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);

        rectMode(CENTER);
        angleMode(RADIANS);
        fill("green");
        strokeWeight(4);
        stroke("blue");
        rect(0, 0, this.width, this.height);

        pop();
    }
}