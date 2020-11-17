var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, InvisibleGround;

function preload() {

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 600)
  monkey = createSprite(100, 200, 0, 0);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.125;
  

  FoodGroup=createGroup();
  obstacleGroup=createGroup();

  


  InvisibleGround = createSprite(300, 310, 600, 10)
  InvisibleGround.visible = false;


  ground = createSprite(300, 310, 600, 10)
  
  score=0
}


function draw() {
  background("white");

  score = score + Math.round(getFrameRate()/60);
  text("Survival Time="+score,500,50)
  ground.velocityX = -4
  if (ground.x > 0) {
    ground.x = ground.width / 2;
  }
      if(keyDown("space")&&monkey.y>100) {
        monkey.velocityY = -12;
        
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(InvisibleGround);
 

  if (frameCount % 80 == 0) {
      var r=Math.round(random(120,200));
    banana = createSprite(300, r, 0, 0);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX=-4;
    banana.lifetime=90
    
    FoodGroup.add(banana);
  
  }
  if(frameCount%300==0){
    
    obstacle = createSprite(300,290, 0,0);
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.1;
    
    obstacle.velocityX=-4;
    
    obstacle.lifetime=70;
    
    obstacleGroup.add(obstacle);
    
  }

  drawSprites();
}