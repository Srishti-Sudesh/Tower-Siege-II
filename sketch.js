
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var ground, ground1;
var polygon, chain;

function preload(){
 
}

function setup() {
	createCanvas(1280, 580);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(640,570,1280,70);
	ground1 = new Ground(600,400,250,10);
  ground2 = new Ground(1000,200,200,10);

  polygon = new Polygon(100,300,50,50);
  chain = new Chain(polygon.body,{x:100, y:300});

	block1 = new Block(520,350,40,50);
  block2 = new Block(560,350,40,50);
	block3 = new Block(600,350,40,50);
	block4 = new Block(640,350,40,50);
  block5 = new Block(680,350,40,50);

	block6 = new Block(540,320,40,50);
  block7 = new Block(580,320,40,50);
  block8 = new Block(620,320,40,50);
	block9 = new Block(660,320,40,50);

	block10 = new Block(560,280,40,50);
	block11 = new Block(600,280,40,50);
	block12 = new Block(640,280,40,50);

  block13 = new Block(580,230,40,50);
	block14 = new Block(620,230,40,50);


  block15 = new Block(960,180,40,50);
	block16 = new Block(1000,180,40,50);
	block17 = new Block(1040,180,40,50);

  block18 = new Block(980,130,40,50);
	block19 = new Block(1020,130,40,50);

	block20 = new Block(1000,100,40,50);

  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(242,189,147);
  

  ground.display();
  ground1.display();
  ground2.display();

  polygon.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

  chain.display();

  fill("white");
  textSize(25);
  stroke("brown");
  strokeWeight(3);
  text("Drag the polygon and launch it to hit the blocks!",20,30);
  text("Press SPACE for a second chance",20,70);


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:100, y:300});
    chain.attach(polygon.body);
  }
}