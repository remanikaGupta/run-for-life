var form, player, game
var player
var playerCount,  allPlayers

var gameState=0
var thief, police
var participants = []
var db

var obstacle1



function setup() {
  db = firebase.database()
  createCanvas(displayWidth-50,displayHeight-50);

  game = new Game()
  game.getState() 
  game.start()
  obstacleG = new Group()

/*or(var i=0; i<600 ;i++){

w = random(200,displayWidth-200)
h = random(-displayHeight*10, displayHeight - 200)

obstacle = createSprite(w,h,20,20)

var num = Math.round(random(1,5))

switch(num){

case 1: obstacle.addImage(o1)
break;
case 2: obstacle.addImge(o2)
  break;
case 3: obstacle.addImage(o3)
  break;
case 4: obstacle.addImage(o4)
break;
case 5: obstacle.addImage(o5)
break;


}


obstacleG.add(obstacle)


}*/




}

function draw() {
  background("lightBlue"); 
  
  if(playerCount === 2){
    gameState=1
    game.update(1)
    }


    if(gameState === 1){
game.play()

    }
}