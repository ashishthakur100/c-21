//var fixedRect, movingRect;
var box1, box2;
var object1,object2;
function setup() {
  createCanvas(1200,800);
  
  box1 = createSprite(400,200,80,130);
  box1.shapeColor = "yellow";

  box2 = createSprite(50,200,20,100);
  box2.shapeColor = "blue";
  box2.velocityX=4;
}

function draw() {
  background(0,0,0);  
  

if(isTouching(box1,box2))
{
 box1.velocityX=-5;
box2.shapeColor="pink";


}
else
{
   // box2.velocityX=0;
  //box1.shapeColor="red";

}
  drawSprites();
}



