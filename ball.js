class Ball{
    constructor(x,y){
        var opt={
            density: 1,
            frictionAir:0.005
        }
        this.r=40;
        this.body=Bodies.circle(x,y,40,opt);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,40,40);
        pop();
    }
}