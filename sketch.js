const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4,ball5
var con1,con2,con3,con4,con5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
    var ball_options={
		restitution:0.8
	}
	con1 = Matter.Constraint.create({
		pointA:{x:0,y:0},
		bodyB:ball1,
		pointB:{x:0,y:0},
		bodyB:roof,
		length:100,
		stiffness:0.1,
	  })
	  World.add(world,con1)
	  con2 = Matter.Constraint.create({
		pointA:{x:0,y:0},
		bodyB:ball1,
		pointB:{x:0,y:0},
		bodyB:roof,
		length:100,
		stiffness:0.1,
	  })
	  World.add(world,con2)
	  con3 = Matter.Constraint.create({
		pointA:{x:0,y:0},
		bodyB:ball1,
		pointB:{x:0,y:0},
		bodyB:roof,
		length:100,
		stiffness:0.1,
	  })
	  World.add(world,con3)
	  con4 = Matter.Constraint.create({
		pointA:{x:0,y:0},
		bodyB:ball1,
		pointB:{x:0,y:0},
		bodyB:roof,
		length:100,
		stiffness:0.1,
	  })
	  World.add(world,con4)
	  con1 = Matter.Constraint.create({
		pointA:{x:0,y:0},
		bodyB:ball1,
		pointB:{x:0,y:0},
		bodyB:roof,
		length:100,
		stiffness:0.1,
	  })
	  World.add(world,con5)
	  
	roof = Bodies.rectangle(400,100,230,20,roof_options);
	ball1 = Bodies.circle(300,100,20,ball_options)
	ball2 = Bodies.circle(350,100,20,ball_options)
	ball3 = Bodies.circle(400,100,20,ball_options)
	ball4 = Bodies.circle(450,100,20,ball_options)
	ball5 = Bodies.circle(500,100,20,ball_options)
    World.add(world,ball1)
	World.add(world,ball2)
	World.add(world,ball3)
	World.add(world,ball4)
	World.add(world,ball5)
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
ellipse(ball1.position.x,ball1.position.y,10)
ellipse(ball2.position.x,ball2.position.y,10)
ellipse(ball3.position.x,ball3.position.y,10)
ellipse(ball4.position.x,ball4.position.y,10)
ellipse(ball5.position.x,ball5.position.y,10)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==UP_ARROW){
	  Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0})
	}
  }