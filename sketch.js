var ghost, ghostImg;
var obstacle, obstacleImg;
var tower, towerImg;
var target, targetImg;
var gameState = "play";
var score = 0;
var targetGroup, obstacleGroup;

function preload() {
  ghostImg = loadImage("ghost.png");
  towerImg = loadImage("tower.png");
  obstacleImg = loadImage("star.png");
  targetImg = loadImage("target.png");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200, 200, 50, 50);
  ghost.addImage("ghost", ghostImg);
  
  target = createSprite(500, 500);
  
  
  obstacleGroup = new Group();
 
   target.addImage(targetImg);
}

function draw() {
  background(0);
  text("score : " + score, 300, 300);
  //score += 1;
  ghost.scale=0.3
  if (tower.y > 600) {
    tower.y = 300;
  }

  if (gameState === "play") {
    if (keyDown("left")) {
      ghost.x = ghost.x - 3;
    }
    if (keyDown("right")) {
      ghost.x = ghost.x + 3;
    }
    if (keyDown("space")) {
      ghost.velocityY = -10;
    }
    ghost.velocityY = ghost.velocityY + 0.8;

    spawnObstacles();
    if (obstacleGroup.isTouching(ghost)) {
      ghost.destroy();
      gameState = "end";

    }
    if (target.isTouching(ghost)){
        score=score+1
    }
  }

  if (gameState === "end") {
    background("black");
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230, 250);
  }

  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 240 === 0) {
    var obstacle = createSprite(random(100,500), -50);
    obstacle.scale=0.3
   
   
    obstacle.addImage(obstacleImg);
   

    obstacle.velocityY = 1;
    //target.velocityY = 1;
    ghost.depth

    
    
 obstacle.lifetime = 800;
    //target.lifetime = 800;
   
   
     obstacleGroup.add(obstacle);
   
    
}
}
