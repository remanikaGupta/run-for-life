class Game{
constructor(){

}

getState(){
    
db.ref('gameState').on('value',(data)=>{
gameState = data.val()
})
}


update(state){

db.ref('/').update({
'gameState' : state
})
}

start(){
if(gameState === 0){
    player = new Player()
    player.getCount()
    form = new Form()
    form.display()
}
thief = createSprite(500,500,20,20)
police = createSprite(300,300,20,20)
participants= [thief, police]
}   

play(){

  form.hide_details()
Player.getAllPlayersInfo()


if(allPlayers!==undefined){

    // Image


    var index = 0

var x = Math.round(random(200,600))

var y =  Math.round(random(200,600))


for(var plr in allPlayers)

index = index+1

x = allPlayers[plr].xPos
y = allPlayers[plr].yPos


participants[index-1].x = x
participants[index-1].y = y

if(player.index === plr & player.index!== null){
participants[index-1].shapeColor = 'red'
camera.position.x = displayWidth/2
camera.position.y = participants[index-1].y
    

    if(keyDown(RIGHT_ARROW)){
        player.xPos += 2
        }

    if(keyDown(LEFT_ARROW)){
        player.xpos += 2
    }

    

    
}








    
}




drawSprites()










}




}