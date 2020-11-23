class Rope {
    constructor(body1, point2){
    var p = {
    bodyA:body1,
    pointB:point2,
    stiffness:0.5,
    length:200
    }
    this.attachment = Matter.Constraint.create (p);
    World.add (world,this.attachment)
    }
    display(){
    var point1 = this.attachment.bodyA.position
    var point2 = this.attachment.pointB
    line(point1.x, point1.y, point2.x, point2.y)
    }
    }