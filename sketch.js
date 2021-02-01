var fairy,fairyImage,star,starImage;
var music;
var canvas;
var fairy1,bg;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
var engine,world;
function preload()
{
fairyImage=loadAnimation("images/fairy1.png","images/fairy2.png")
starImage=loadImage("images/star.png")
//music=loadSound("images/JoyMusic.mp3")
bg = loadImage('images/starnight.png')
}

function setup() {

  canvas=createCanvas(800, 750);
 
  //music.play();
  //star.scale=0.5
fairy=createSprite(130,500,100,100)
 fairy.addAnimation("flying",fairyImage)
 fairy.scale=0.2

 star=createSprite(650,30,20,20);
star.addImage('jj',starImage)
star.scale=0.2;
  engine=Engine.create();
  world=engine.world;
  //star=Bodies.circle(200,200,10,bounce)
 // fairy=Bodies.rectangle(100,500,100,100);
 starBody=Bodies.circle(650,30,5,{restitution:0.5,isStatic:true});
  World.add(world,starBody)
  

  
}


function draw() {
  background(bg);
  Engine.update(engine)
  //console.info(World.mouseY,"   ",World.mouseX)
  star.y= starBody.position.x;
  if(star.y>470 && starBody.position.y>470){
    Matter.Body.setStatic(starBody,true);
  }
drawSprites();
keyPressed()
}
function keyPressed(){
  if(keyDown('RIGHT_ARROW')){
    fairy.x = fairy.x+20;
  }
  if(keyDown('LEFT_ARROW')){
    fairy.x = fairy.x-20;
  }
  if(keyDown('DOWN_ARROW')){
    Matter.Body.setStatic(starBody,false);
  }
}