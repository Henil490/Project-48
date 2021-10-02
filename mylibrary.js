function laser(){
    var bullet=createSprite(displayWidth/2,displayHeight/2);
    bullet.addImage(laserimg)
    bullet.scale=0.3
    bullet.x=player.x;
    bullet.y=player.y;
    bullet.velocityY=-8
    bulletGroup.add(bullet)
    }
function garbage(){
    if(frameCount%60==0){
    var debris=createSprite(random(100,displayWidth-100),-50);
    var rand=Math.round(random(1,5));
    switch(rand){
      case 1:debris.addImage(garbage1);
      break;
      case 2:debris.addImage(garbage2);
      break;
      case 3:debris.addImage(garbage3);
      break;
      case 4:debris.addImage(garbage4);
      break;
      case 5:debris.addImage(garbage5);
      break;
      default:break;
    }
    debris.velocityY=Math.round(random(4,12));
    debris.scale=0.4
    garbageGroup.add(debris)
  debris.debug=false;
  debris.setCollider("rectangle",0,0,350,350)
    }
  }
function distraction(){
    if(frameCount%150==0){
      var obstacle=createSprite(random(100,displayWidth-100),-50);
    var rand=Math.round(random(1,2));
    switch(rand){
      case 1:obstacle.addImage(obstacle1);
      break;
      case 2:obstacle.addImage(monsterimg);
      break;
      default:break;
    }
    obstacle.velocityY=Math.round(random(4,12));
    obstacle.velocityX=Math.round(random(-6,-2));
    obstacle.scale=0.4
    obstacleGroup.add(obstacle)
    //garbageGroup.add(debris)
  obstacle.debug=false
  obstacle.setCollider("circle",0,0,100)
    }
  }
