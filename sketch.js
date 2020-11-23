
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob (300, 450);
bob2 = new Bob (350, 450);
bob3 = new Bob (400, 450);
bob4 = new Bob (450, 450);
bob5 = new Bob (500, 450);

roof = new Roof (400, 70, 300, 40);

rope1 = new Rope (bob1.body, {x:300,y:70});
rope2 = new Rope (bob2.body, {x:350, y:70});
rope3 = new Rope (bob3.body, {x:400, y:70});
rope4 = new Rope (bob4.body, {x:450, y:70});
rope5 = new Rope (bob5.body, {x:500, y:70});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 38){
		Matter.Body.applyForce (bob1.body, bob1.body.position,{x:-0.5, y:0})
	}
}


