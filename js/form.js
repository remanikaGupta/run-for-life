class Form {
constructor(){

this.input = createInput("Enter name")
this.title = createElement("h1")
this.button= createButton("start")
this.greeting = createElement('h1')

}


hide_details(){
    this.button.hide()
    this.input.hide()
    this.greeting.hide()

}

display(){


this.input.position(displayWidth/2-80, 200)
this.title.html("RUN FOR LIFE")
this.title.position(displayWidth/2-100,20 )
this.button.position(displayWidth/2-50,250)
this.button.size(100,20)

this.button.mousePressed(()=>{
this.button.hide()
this.input.hide()

player.name = this.input.value()
playerCount++
player.index = playerCount
player.update()
player.updateCount(playerCount)

this.greeting.html("Hello " + player.name)
this.greeting.position(displayWidth/2-100,displayHeight/2-100)
})


}


}