class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
     
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
         
          index = index + 1 ;
  
         
          x = x + 200;
          
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
         // console.log(index, player.index)
  
         
          if (index === player.index){
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }
  