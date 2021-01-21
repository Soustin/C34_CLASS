class Ball{
    constructor(x, y, r, angle){
        options = {
            density:1,
            frictionAir:0.005,
        }
        this.body = Bodies.circle(x, y, this.r/2, options);
           this.r = r;
           this.x =x;
           this.y =y;
           World.add(world, this.body);
        }   
         display(){
           var angle = this.body.angle;
           var pos = this.body.position;
           push();
           translate(pos.x, pos.y);
           rotate(angle);
           ellipseMode(CENTER);
           ellipse(0, 0, this.width, this.height);
           pop();
         }
    }