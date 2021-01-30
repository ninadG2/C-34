const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var cieling1, box2, box3, box4, box5;
var rope;
var engine, world, ball, ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2, 390, 800, 20)
  ball = new Ball(358, 300, 50)
  cieling1 = new Ground(358, 0, 85, 70)
  rope = new Rope(cieling1.body, ball.body)
  box2 = new Box(600, 100, 80, 80)
  box3 = new Box(600, 150, 80, 80)
  box4 = new Box(600, 250, 80, 80)
  box5 = new Box(600, 200, 80, 80)

  
  
}

function draw() {
  background(220,255,255); 
  Engine.update(engine);
  //console.log("ball " + ball);
  ground.show();
  box2.show();
  box3.show();
  box4.show();
  box5.show();
  rope.display();
  ball.display();
  cieling1.show();
  
  
  
  

}
function mouseDragged()
{
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}