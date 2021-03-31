const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup() {
  createCanvas(1200,400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 390, 1200, 20);

  box1 = new Box(700, 350, 50, 50);
  box2 = new Box(850, 350, 50, 50);
  box3 = new Box(700, 250, 50, 50);
  box4 = new Box(850, 250, 50, 50);
  box5 = new Box(775, 150, 50, 50);

  pig1 = new Pig(775, 350);
  pig2 = new Pig(775, 250);

  log1 = new Log(775, 300, 200, PI/2);
  log2 = new Log(775, 200, 200, PI/2);
  log3 = new Log(750, 150, 120, PI/7);
  log4 = new Log(800, 150, 120, -PI/7);

  bird = new Bird(100, 300);
}

function draw() {
  background(0);  
  
  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird.display();
}