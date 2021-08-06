class Player{
constructor(){
    
    this.name = ""
    this.xPos = null
    this.yPos = null
    
}
getCount(){
    var playerCountRef = db.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    db.ref('/').update({
      playerCount : count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
        db.ref(playerIndex).set({
        name:this.name,
        xPos: this.xPos
    });
  }

  static getAllPlayersInfo(){
 
    db.ref('players').on("value",(data)=>{
      allPlayers = data.val()
    })

  }




    
}

