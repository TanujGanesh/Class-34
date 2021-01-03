class Box{
    constructor(x,y){
        var opt={
            restitution:0.8,
            friction:1.0,
            density:0.04
        }
        this.w=70;
        this.h=70;
        this.body=Bodies.rectangle(x,y,70,70,opt);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        stroke(0);
        fill("yellow");
        rect(0,0,this.w,this.h);
        pop();
    }
}