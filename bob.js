class Bob {
  constructor(x,y){
    var option = {density: 1, friction: 0, restitution: 1};
   this.body = Bodies.circle(x,y,25);
   World.add(world,this.body);
    }
   
    display() {
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, 25, 25);
    }
   }