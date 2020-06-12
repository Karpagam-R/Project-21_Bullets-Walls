var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="white";

  bullet=createSprite(20,200,50,5);
  bullet.shapeColor= "white";
  
  speed= random(223,321)
  weight=random(30,52)
  thickness=random(22,83);

  bullet.velocityX=speed;

}

function draw() {
  background("LightSkyBlue"); 

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor="red";
      textSize(20);
      fill (255);
      text ("Result: Material Rejected", 100,130)
    }

    if(damage<10){
      wall.shapeColor="green";
      textSize(20);
      fill (255);
      text ("Result: Material Aceepted", 100,130)
    }
  }

  textSize(20);
  fill (0);
  text ("Wall Safety Test",100,70);
  fill (255);
  text ("Damage Value: " + Math.round(damage),100,100);

    drawSprites();  
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}