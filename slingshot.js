class slingshot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,bodyB:bodyB,
            stiffness:0.08,length:5

        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        var posA=this.sling.bodyA.position;
        var posB=this.sling.bodyB.position;
        strokeWeight(7)
        line(posA.x,posA.y,posB.x,posB.y);
    }

}