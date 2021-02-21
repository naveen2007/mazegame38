

var ghost, runner;
var form, player, game;
var backgroundimg;
var ghostimg,playerimg;
var gameImg;
var runningPlayer;
var PlayerRight, PlayerLeft;
var wall1;
var playerRunning;
var ghostGroup
var wallGroup

var gameState = 0;

var playerCount = 0;
var edges
var gameOverImg





function preload(){

backgroundimg = loadImage("images/backgroundimg.png");
ghostimg = loadImage("images/Ghost.png")
playerimg = loadAnimation("images/idle.png")
gameImg = loadImage("images/gameimage.jpg")
PlayerLeft = loadAnimation("images/left.png")
PlayerRight = loadAnimation("images/right.png")
gameOverImg = loadImage("images/gameOver.jpg")


}



function setup() {



  
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
   form = new Form();



   runner = createSprite(120,75,50,50)
    runner.addAnimation("player",playerimg)
    runner.scale = 0.1
    runner.velocityX = 0
    runner.visible  = false
   

    runnerRight = createSprite(120,75,50,50)
    runnerRight.addAnimation("player",PlayerRight)
    runnerRight.scale = 0.1
    runnerRight.velocityX = 0
    runnerRight.visible  = false

    runnerLeft = createSprite(120,75,50,50)
    runnerLeft.addAnimation("player",PlayerLeft)
    runnerLeft.scale = 0.1
    runnerLeft.velocityX = 0
    runnerLeft.visible  = false

   edges = createEdgeSprites();

    ghostGroup = new Group();
    wallGroup = new Group();

    spawnGhosts();
    ghostGroup.setVisibleEach(false)

    ghostGroup.setVelocityXEach(5)
    ghostGroup.setVelocityYEach(6)
}

function draw() {
 

 
  //background(255,255,255);  
  if(gameState === 0){
    background(backgroundimg);
   form.display();
   //gameState = 1

  }
  if(playerCount === 1){
    game.update(1);
  
  }
  if(gameState === 1){
    form.hide();
    //game.play();
    
   // game.update(2);
   }
  if(gameState === 2){
    //game.end();
    background(255)
    runner.visible = true;
    form.hide()
    text (mouseX + "," + mouseY, mouseX, mouseY)


    if(keyDown("RIGHT_ARROW")){
   // runner.changeAnimation("player",PlayerRight)
  // player.destroy()
   //playerRunning = createSprite(120,75,50,50)
   //playerRunning.addImage("playerrunningleft",PlayerLeft);
   runner.x = runner.x + 5
   runner.velocityY = 0
   runner.visible = false;
   runnerRight.visible = true;
   runnerRight.x = runner.x
   runnerRight.y = runner.y;
    }

    else{

      runnerRight.visible = false;
    }
    if(keyDown("LEFT_ARROW")){
      // runner.changeAnimation("player",PlayerRight)
     // player.destroy()
      //playerRunning = createSprite(120,75,50,50)
      //playerRunning.addImage("playerrunningleft",PlayerLeft);
      runner.x = runner.x - 5
      runner.velocityY = 0
      runner.visible = false;
      runnerLeft.visible = true;
      runnerLeft.x = runner.x
      runnerLeft.y = runner.y;
       }
       else{


        runnerLeft.visible = false;
       }

       if(keyDown("UP_ARROW")){


        runner.y = runner.y - 5


       }



       if(keyDown("DOWN_ARROW")){


        runner.y = runner.y + 5


       }




    wall1 = createSprite(20,300,700,40)
    wall2 = createSprite(390,380,40,200)
    wall3 = createSprite(500,590,500,40)
    wall4 = createSprite(340,100,40,150)
    wall5= createSprite(750,460,40,300)
    wall6 = createSprite(600,100,40,300)
    wall7 = createSprite(880,300,300,40)
    wall8 = createSprite(400,900,40,300)
    wall9  = createSprite(1300,100,40,400)
    wall10 = createSprite(880,500,300,40)
   
  wallGroup.add(wall1)
  wallGroup.add(wall2)
  wallGroup.add(wall3)
  wallGroup.add(wall4)
  wallGroup.add(wall5)
  wallGroup.add(wall6)
  wallGroup.add(wall7)
  wallGroup.add(wall8)
  wallGroup.add(wall9)
  wallGroup.add(wall10)
 


    
ghostGroup.setVisibleEach(true)
createEdgeSprites()



ghostGroup.bounceOff(wallGroup)
ghostGroup.bounceOff(edges)

if(ghostGroup.isTouching(runner)){
gameState = 3;
  
}

if(gameState === 3){
    background(gameOverImg)
    wallGroup.destroyEach();
    runner.destroy();
    ghostGroup.destroyEach();
    ghostGroup.setVelocityXEach(0)
    ghostGroup.setVelocityYEach(0)
    runner.velocityX = 0;
    runner.velocityY = 0;
    runnerRight.destroy();
    runnerLeft.destroy();
    
  
   
   }



  }


  drawSprites();
}




function spawnGhosts(){

ghost1 = createSprite(100,430) 
ghost1.addImage(ghostimg)
ghost1.scale = 0.2
ghost2 = createSprite(100,720) 
ghost2.addImage(ghostimg)
ghost2.scale = 0.2
ghost3 = createSprite(1450,50) 
ghost3.addImage(ghostimg)
ghost3.scale = 0.2
ghost4 = createSprite(920,60)
ghost4.addImage(ghostimg)
ghost4.scale = 0.2



ghostGroup.add(ghost1)
ghostGroup.add(ghost2)
ghostGroup.add(ghost3)
ghostGroup.add(ghost4)

ghostGroup.setLifetimeEach(200)



}