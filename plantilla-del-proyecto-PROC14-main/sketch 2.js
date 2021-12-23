var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");

  // red_balloonImage = loadImage("red_balloon0.png");
  // red_balloonImage = loadImage("redballoon0.png");
  // red_balloonImage = loadImage("red_balloon0");
  red_balloonImage = loadImage("red_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // crear arco para disparar la flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  redB = new Group(); 
  blueB = new Group(); 
  greenB = new Group(); 
  pinkB = new Group(); 
  flecha = new Group();

   score = 0    
}

function draw() {
 background(0);
  // mover el suelo
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover el arco
  bow.y = World.mouseY
  
   // liberar la flecha al presionar la barra espaciadora
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //crear enemigos continuos

   var select_balloon = Math.round(random(1,4));
   var select_balloon = random(1,4);
   var select_balloon = Math.round(random());
   var select_balloon = Math.round(random(1,4,2));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  

  if(flecha.isTouching(redB)){
    score = score + 3
    redB.destroyEach();
    flecha.destroyEach();
  }

  if(flecha.isTouching(blueB)){
    score = score + 1
    blueB.destroyEach();
    flecha.destroyEach();
  }

  if(flecha.isTouching(greenB)){
    score = score + 2
    greenB.destroyEach();
    flecha.destroyEach();
  }

  if(flecha.isTouching(pinkB)){
    score = score - 5
    pinkB.destroyEach();
    flecha.destroyEach();
  }
    
  drawSprites();
  text("Puntuación: "+ score, 300,50);
}


// Crear flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  flecha.add(arrow);
}


 function redBalloon() {
   var red = createSprite(0, Math.round(random(20, 370)) , 10, 10);
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.1;
   redB.add(red);
 }

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}
