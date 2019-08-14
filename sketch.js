var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw() {
  background(0);  
  
  
  
  bounceOff(movingRect,fixedRect);
 

  drawSprites();
}


