const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600, 1200,20);
  box1 = new Box(900,100,70,70);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);

  ground.display();
  box1.display();
}