var bgimg;
var player;
var garbageCollector=0
var garbageGroup;
var bulletGroup;
var obstacleGroup;
var invisibleLine;
var life=5;
var gameState=-1;


function preload()
{
bgimg=loadImage("images/sky.jpeg")
playerimg=loadImage("images/ufo.png")
laserimg=loadImage("images/laser.png")
garbage1=loadImage("images/antenna.png")
garbage2=loadImage("images/rocket.png")
garbage3=loadImage("images/satellite.png")
garbage4=loadImage("images/panel.png")
garbage5=loadImage("images/sensor.png")
monsterimg=loadImage("images/monster.png")
obstacle1=loadImage("images/obstacle.png")
startimg=loadImage("images/start.png")
sound1=loadSound('laser.wav')
sound2=loadSound('background.wav')
bgimg2=loadImage("images/space2.png")
//bg2img=createImg("images/earth.gif")
}

function setup()
{
createCanvas(displayWidth,displayHeight)
edges=createEdgeSprites();
bg=createSprite(displayWidth/2,displayHeight/2)
bg.addImage(bgimg)
bg.scale=1.6
player=createSprite(displayWidth/2,displayHeight/2+250,50,50);
player.addImage(playerimg)
player.scale=0.5
garbageGroup=createGroup()
bulletGroup=createGroup()
obstacleGroup=createGroup();
invisibleLine=createSprite(displayWidth/2,displayHeight-100,displayWidth,10)
invisibleLine.visible=false
start=createSprite(displayWidth/2,displayHeight/2);
start.addImage(startimg)
start.scale=0.5;

player.debug=false;
player.setCollider("rectangle",0,0,350,250)
}

function draw()
{
background(0)
drawSprites(); 
//image(bg2img,0,0,displayWidth,displayHeight)
if(gameState==-1){
  //sound2.play();
fill("red")
strokeWeight(3)
stroke("white")
textSize(25)
text("Destroy 20 garbages to win",displayWidth-850,100)
text("Press Space To Destroy The Garbage",displayWidth/2-180,200)
text("DON'T TOUCH OR SHOOT THE MONSTER OR ASTEROID!",400,displayHeight/2-150)

if(mousePressedOver(start) ||touches.length>0){
gameState=0
touches=[]
}
}
if(gameState==0){
  //console.log(bg.y)
  bg.addImage(bgimg2)
  bg.velocityY=2;
  if(bg.y>1600){
bg.y=displayHeight/2
  }
  start.destroy();
player.depth+=2
if(keyDown (LEFT_ARROW)){
player.x-=12
}
if(keyDown (RIGHT_ARROW)){
  player.x+=10
  }
  if(keyWentDown("SPACE") || touches.length>0){
laser();
touches=[]
sound1.play();

  }
  garbage();
distraction();
for (var y = 0; y < garbageGroup.length; y++) {
  if(garbageGroup.get(y).isTouching(bulletGroup)) {
      bulletGroup.destroyEach();
      garbageGroup.get(y).destroy();
      garbageCollector+=1
  }
}
if(bulletGroup.isTouching(obstacleGroup) || player.isTouching(obstacleGroup) || life==0){
gameState=1
}

for (var i = 0; i < garbageGroup.length; i++) {
  if(garbageGroup.get(i).isTouching(invisibleLine)) {
      garbageGroup.get(i).destroy();
      life-=1
  }
}

if(garbageCollector==20){
  gameState=2;
}


  player.collide(edges[0])
  player.collide(edges[1])
  fill("white")
strokeWeight(3)
stroke("red")
textSize(25)
text("Garbage Destroyed :"+garbageCollector,200,200)
text("Lifes Left :"+life,displayWidth-300,200)


}else if(gameState==1){
  fill("red")
  strokeWeight(3)
  stroke("white")
  textSize(35)
  text("GAME OVER!!!",displayWidth/2-100,displayHeight/2)

}else if(gameState==2){
  fill("red")
  strokeWeight(3)
  stroke("white")
  textSize(35)
  text("YOU WIN! YOU SAVED EARTH! CONGRATULATIONS",displayWidth/2-350,displayHeight/2)
}

  

}




