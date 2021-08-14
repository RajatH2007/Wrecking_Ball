class Ball{
    constructor(x, y, radius, angle){
        var options={
            frictionAir: 0.005,
            density: 1
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);

    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}