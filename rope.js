class Rope{
    constructor(bodyA,pointB){
        var opt={
            bodyA: bodyA,
            pointB: pointB
        }
        this.pointB=pointB;
        this.body=Constraint.create(opt);
        World.add(world,this.body);
    }
    display(){
        var posA = this.body.bodyA.position;
        var posB = this.pointB;
        push();
        stroke(0);
        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}