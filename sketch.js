
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new roof(340,200); 
	bobObject1=new ball(280,400,15);
    bobDiameter=bobObject1.radius*2;
  bobObject2=new ball(310,400,15);
  bobDiameter2=bobObject2.radius*2;
  bobObject3=new ball(340,400,15);
  bobDiameter3=bobObject3.radius*2;
  bobObject4=new ball(370,400,15);
  bobDiameter4=bobObject4.radius*2;
  bobObject5=new ball(400,400,15);
  bobDiameter5=bobObject5.radius*2;
	
	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter2*2, 0);
	rope3=new rope(bobObject3.body,roofObject.body,-bobDiameter3*2, 0);
	rope4=new rope(bobObject4.body,roofObject.body,-bobDiameter4*2, 0);
	rope5=new rope(bobObject5.body,roofObject.body,-bobDiameter5*2, 0);


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  stroke("brown")
  line(bobObject1.body.position.x,400,276,200);
  line(bobObject2.body.position.x,400,306,200);
  line(bobObject3.body.position.x,400,336,200);
  line(bobObject4.body.position.x,400,366,200);
  line(bobObject5.body.position.x,400,396,200);
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();  
  bobObject5.display();  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //keyPressed();
  drawSprites();
 
}

//function mouseDragged(){
  //Matter.Body.setPosition(bobObject1.body, {x:mouseX, y:mouseY});
//}


