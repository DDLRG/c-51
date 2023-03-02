var paisaje, paisajeImg;
var plane, planeImg;
var alien, alienImg
var alien2, alien2Img
var bullet, bulletImg
function preload(){
  
  bulletImg = loadImage("assets/bullet.png")
  alien2Img = loadImage("assets/alien2.png")
  planeImg = loadImage("assets/plane.png")
  paisajeImg = loadImage("assets/paisaje.jpg")
  alienImg = loadImage("assets/alien.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //Añadir la imagen de fondo
paisaje = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
paisaje.addImage(paisajeImg)
paisaje.scale = 3.2
  

//Crear el sprite del jugador

plane = createSprite(displayWidth-1000, displayHeight-300, 50, 50);
plane.addImage(planeImg)
plane.scale = 0.3



  //player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
  // player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}
function bullet(){
  var bullet = createSprite(plane.x, plane.y);
  bullet.velocityY = 3;

}

function hardcord(){
  if (frameCount%110===0) {
    alien = createSprite(displayWidth-1000, displayHeight-800, 50, 50);
    alien.x =Math.round(random(800,1100));
    alien.y =Math.round(random(800,1100));
    alien2 = createSprite(displayWidth-1000, displayHeight-850, 50, 50);
    alien2.x =Math.round(random(800,1100));
    alien2.y =Math.round(random(800,1100));
    alien2.addImage(alien2Img)
    alien2.scale = 0.2
    //alien2.velocityY =+1
    alien.addImage(alienImg)
    alien.scale = 0.1
    //alien.velocityY =+2

    //alien.lifetime = 400
    
  }
}
function draw() {
  background(0); 
  hardcord();
  if (keyDown("space")) {
    bullet();
  }


  //Mover al jugador arriba y abajo y hacer que el juego móvil sea compatible de forma táctil.
if(keyDown("UP_ARROW")||touches.length>0){
  plane.y = plane.y-30
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  plane.x = plane.x-30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  plane.x = plane.x+30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
  plane.y = plane.y+30
}


//Liberar las balas y cambiar la imagen del tirador a la posición de disparo cuando la barra espaciadora se presiona.


//El jugador regresa a la imagen de posición original una vez que dejamos de presionar la barra de espacio.


drawSprites();

}
