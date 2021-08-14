class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length:475
        }
        this.bodyA = bodyA;
        
        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("green");

       
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
      
            
        pop();
        }
    }
    
}