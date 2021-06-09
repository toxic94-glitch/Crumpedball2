var dustbinObj;
var ground;
var ball;
var box1,box2;
var dustbinImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg=loadImage("Dustbin.png")
}

function setup() {
  rectMode(CENTER);
	createCanvas(1400, 500);

  engine = Engine.create();
	world = engine.world;
  box1=new Dustbin(950,290,10,180)
  box2=new Dustbin(810,290,10,180)
  ground = new Ground(400,400,1200,20);
  dustbinObj = new Dustbin(880,380,150,20);
  ball=new  Paper(200,270, 20);
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
 
  ground.display();
  dustbinObj.display();
  ball.display();
  image(dustbinImg,790,190,180,200);

  drawSprites();

}

function keyPressed() {
if (keyCode=== UP_ARROW) {
  Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-60});
}
}

