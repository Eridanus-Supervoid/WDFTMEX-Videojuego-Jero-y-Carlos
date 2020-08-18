
//Constructor Escenario

class Board {
    constructor() {
        this.x = 0
        this.y = 0
        this.width = $canvas.width
        this.height = $canvas.height
        this.img = new Image()
        this.img.src ="./images/background1.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    
}

//Constructor Jugadores
class Player1 {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.width = 70
      this.height = 70
      this.velX = 0
      this.velY = 0
      this.img = new Image()
      this.img.src ="./images/0rt9b.png"
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    moveUp() {
      
      if(this.velY >= 0){
        this.velY = -2
      }

      this.velY -= 2
      this.y += this.velY

      if(this.y <=0){
        this.y = 0
      }
        
    }
    moveDown() {
      if(this.velY <= 0){
        this.velY = 2
      }

      this.velY += 2
      this.y += this.velY

      if(this.y >= $canvas.height -this.height){
         this.y = $canvas.height - this.height
      }
    }
    moveLeft() {
      if(this.velX >= 0){
        this.velX = -2
      }
      this.velX -= 2     
      this.x += this.velX
      
      if(this.x <=0){
        this.x = 0
      }
    }
    moveRight() {
      if(this.velX <= 0){
        this.velX = 2
      }
      this.velX += 2     
      this.x += this.velX
      
      if(this.x >= $canvas.width -this.width){
        this.x = $canvas.width - this.width
     }
    }
  }

class Player2 {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.width = 70
      this.height = 70
      this.velX = 0
      this.velY = 0
      this.img = new Image()
      this.img.src = "./images/oixhape35id31.png"
      
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    moveUp() {
      
      if(this.velY >= 0){
        this.velY = -2
      }

      this.velY -= 2
      this.y += this.velY

      if(this.y <=0){
        this.y = 0
      }
        
    }
    moveDown() {
      if(this.velY <= 0){
        this.velY = 2
      }

      this.velY += 2
      this.y += this.velY

      if(this.y >= $canvas.height -this.height){
         this.y = $canvas.height - this.height
      }
    }
    moveLeft() {
      if(this.velX >= 0){
        this.velX = -2
      }
      this.velX -= 2     
      this.x += this.velX
      
      if(this.x <=0){
        this.x = 0
      }
    }
    moveRight() {
      if(this.velX <= 0){
        this.velX = 2
      }
      this.velX += 2     
      this.x += this.velX
      
      if(this.x >= $canvas.width -this.width){
        this.x = $canvas.width - this.width
     }
    }
  }

//Constructor Obstáculos