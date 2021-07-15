var bgImg;
var machine,MImg;
// ss = spaceShip
var ss,sst,ssl,ssr;
var ssImg,sstImg,sslImg,ssrImg;

function preload(){
bgImg = loadImage("spacebg.jpg");
MImg = loadImage("iss.png");
ssImg = loadImage("spacecraft1.png");
sstImg = loadImage("spacecraft2.png");
sslImg = loadImage("spacecraft3.png");
ssrImg = loadImage("spacecraft4.png");

}

function setup() {
  createCanvas(1000, 900);

  ss=createSprite(400,700);
  ss.addImage(ssImg);
  ss.scale = 0.3;

  machine=createSprite(500,150);
  machine.addImage(MImg);
  machine.scale = 0.7;

}

function draw() {
  background(bgImg);  

   if(ss.setPositionx=480){
    //ss.setPositionX = 450;
    textSize(20);
    text("has Docked",800,780);
  }
  else  {
    textSize(20);
    text(" unDocked",850,780);
  }

 if(keyDown("UP_ARRow")){
   ss.velocityY = -0.5;
   ss.addImage(sstImg);
 }

 if(keyDown("LEFT_ARROW")){
  ss.velocityX = -0.8;
  ss.addImage(ssrImg);
}

if(keyDown("DOWN_ARROW")){
  ss.velocityY = 0.2;
  ss.addImage(ssImg);
}

if(keyDown("RIGHT_ARROW")){
  ss.velocityX = 0.7;
  ss.addImage(sslImg);
}

if(keyWentUp("UP_ARROW")){
  ss.velocityY = 0;
  ss.addImage(ssImg);
}

if(keyWentUp("DOWN_ARROW")){
  ss.velocityY = 0;
  ss.addImage(ssImg);
}

if(keyWentUp("LEFT_ARROW")){
  ss.velocityX = 0;
  ss.addImage(ssImg);
}

if(keyWentUp("RIGHT_ARROW")){
  ss.velocityX = 0;
  ss.addImage(ssImg);
}
  
   drawSprites();
}