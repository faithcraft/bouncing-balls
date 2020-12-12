const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
var engine, world;
var ball, ground;
var foodball;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var ball_option ={
    restitution:1.0,
    //mass: 1.360755439999997
  }
  ball = Bodies.circle(200,200,20, ball_option);
  World.add(world,ball);
  console.log(ball);

  var foodball_option = {
    restitution: 1.0
  }

  foodball = Bodies.circle(150,200,20, foodball_option);
  World.add(world,foodball);


  var ground_option ={
    isStatic:true
  }
  ground = Bodies.rectangle(200,380,400,40, ground_option);
  World.add(world,ground);
}

function draw() {
  background(0);  
 
  Engine.update(engine);
  rectMode(CENTER);
  fill("red");
  rect(ground.position.x ,ground.position.y,400,40)
  
  


  ellipseMode(RADIUS);
  fill("blue");
  circle(ball.position.x,ball.position.y,20);
  fill("cyan");
  circle(foodball.position.x,foodball.position.y,20);
  
  
}