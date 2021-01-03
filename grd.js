class Grd{
    constructor(x,y,w,h){
        var opt={
            isStatic: true
        }
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,this.w,this.h,opt);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        stroke(0);
        fill("green");
        rect(0,0,this.w,this.h);
        pop();
    }
}