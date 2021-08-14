const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1800,900);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground();
  stand1 = new Stand(450,700,950,10);
  stand2 = new Stand(790,200,200,10);
 
  //level one
  block1 = new Block(590,690,30,40);
  block2 = new Block(620,690,30,40);
  block3 = new Block(650,690,30,40);
  block4 = new Block(680,690,30,40);
  block5 = new Block(710,690,30,40);
  block6 = new Block(740,690,30,40);
  block7 = new Block(770,690,30,40);
  //level two
  block8 = new Block(620,650,30,40);
  block9 = new Block(650,650,30,40);
  block10 = new Block(680,650,30,40);
  block11 = new Block(710,650,30,40);
  block12 = new Block(740,650,30,40);
  //level three
  block13 = new Block(650,610,30,40);
  block14 = new Block(680,610,30,40);
  block15 = new Block(710,610,30,40);
  //top
  block16 = new Block(680,570,30,40);

  ball = new Ball(450, 600, 45);

  slingShot = new SlingShot(ball.body,{x:450, y:100});
  
  Engine.run(engine);
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  ball.display();
  slingShot.display();
 

  ground.display();
  stand1.display();
  //stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("hotpink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


