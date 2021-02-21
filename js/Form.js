class Form{
constructor(){
this.input = createInput('Enter Name Here')
this.button = createButton('play')
this.greeting = createElement('h2')
this.title = createElement('h2')
this.button1 = createButton('Start Game')
 
}

hide(){
this.button.hide()
this.input.hide()
this.greeting.hide()
this.title.hide()
this.button1.hide();

}

display(){

this.title.html("Maze Runner")
this.title.position(displayWidth/2,0)

this.button.position(displayWidth/2 + 30, displayHeight/2);
this.input.position(displayWidth/2 - 30, displayHeight/2 - 80);

this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
this.title.hide();

player.name = this.input.value();
playerCount+=1;
      //player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      gameState = 1

this.greeting.html("Hello   "+   player.name   + "," +  "    Your goal is to reach the end of the maze, without getting attacked by the ghosts.") 

this.greeting.position(displayWidth/4,displayHeight/3);

this.button1.position(displayWidth/2,displayHeight/2);
})
this.button1.mousePressed(()=>{ 
    this.button1.hide();
    //this.input.hide();
   this.greeting.hide();
   gameState = 2
  
 
    })

}










}