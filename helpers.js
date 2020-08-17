//Función Update

//Función Start Game



function update() {
    //frames++
    //generateObstacles()
    clearCanvas()
    board.draw()
    //checkCollition()
    p1.draw()
    p2.draw()
    //drawObstacles()
    //drawScore()
    updatePlayersPos()
    //update()
    setInterval(update, 1000 / 60)
  }
  
  //Función Limpiar Canvas
  function clearCanvas() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)
  }
  
  function updatePlayersPos() {
    p1.x += p1.velX
    p1.y += p1.velY
    p2.x += p2.velX
    p2.y += p2.velY
/*
    //atraction x
    if(p1.x < p2.x){
        p1.velX +=10
        p2.velX -=10
    }else{
        p1.velX -=10
        p2.velX +=10 
    }
    //atraction y
    if(p1.y < p2.y){
        p1.velY +=10
        p2.velY -=10
    }else{
        p1.velY -=10
        p2.velY +=10 
    }
*/
  }
  
  //Función Game Over
  function gameOver() {
    clearInterval(intervalId)
    ctx.font = `80px 'Comic Neue'`
    ctx.fillStyle = "crimson"
    ctx.fillText("Game Over", 200, 400)
  }
  
  
  

