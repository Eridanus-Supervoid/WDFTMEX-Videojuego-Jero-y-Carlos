

//Función Start Game


//Función Update
function update() {
    frames++
    //generateObstacles()
    clearCanvas()
    board.draw()
    checkMovement()
    p1.draw()
    p2.draw()

    //drawObstacles()
    //drawScore()
    scoreDisplay()
    pull()
    playerCollition()
  }
  
  //Función Limpiar Canvas
function clearCanvas() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}
    
function checkMovement() {
    if (keys.includes(87) ){
      p1.moveUp()
    }
    if (keys.includes(65) ){
      p1.moveLeft()
    }
    if (keys.includes(68) ){
      p1.moveRight()
    }
    if (keys.includes(83) ){
      p1.moveDown()
    }
    if (keys.includes(38) ){
      p2.moveUp()
    }
    if (keys.includes(37) ){
      p2.moveLeft()
    }
    if (keys.includes(39) ){
      p2.moveRight()
    }
    if (keys.includes(40) ){
      p2.moveDown()
    }
}

function scoreDisplay (){
    ctx.fillStyle = "white"
    ctx.font = "30px Sans Serif"
    if (frames % 50 === 0){
      score++
    }
    ctx.fillText(`Score: ${score}`, 50, 50)
}

function pull (){
   if (p1.x < p2.x){
     p1.x += playersPullStrength
     p2.x -= playersPullStrength
   }else{
    p1.x -= playersPullStrength
    p2.x += playersPullStrength
   }
   if (p1.y < p2.y){
    p1.y += playersPullStrength
    p2.y -= playersPullStrength
  }else{
   p1.y -= playersPullStrength
   p2.y += playersPullStrength
  }
}
