var movingRect; 
var fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(600, 200, 50, 50);
  fixedRect = createSprite(400, 200, 50, 50); 
}

function draw() {
  background(255,255,255);  

movingRect.x = mouseX; 
movingRect.y = mouseY; 

if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
  && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
  && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
movingRect.shapeColor = "violet"; 
fixedRect.shapeColor = "violet"; 
}

else {
  movingRect.shapeColor = "pink"; 
  fixedRect.shapeColor = "pink"
}

  drawSprites();
}