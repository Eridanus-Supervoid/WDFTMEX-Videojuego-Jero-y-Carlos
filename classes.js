//Constructor Jugadores

//Constructor Escenario

//Constructor Obstáculos


class Board {
    constructor() {
        this.x = 0
        this.y = 0
        this.width = $canvas.width
        this.height = $canvas.height
        this.img = new Image()
        this.img.src =
            "https://i.ytimg.com/vi/4gmrHQa7fEg/maxresdefault.jpg"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    
}


class Player1 {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.width = 70
      this.height = 70
      this.velX = 0
      this.velY = 0
      this.img = new Image()
      this.img.src =
        "https://raw.githubusercontent.com/ironhack-labs/lab-canvas-flappybirds/master/images/flappy.png"
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    moveUp() {
        this.velY -= 10
    }
    moveLeft() {
        this.velX -= 10
    }
    moveRight() {
        this.velX += 10
    }
    moveDown() {
        this.velY += 10
    }
  }

  class Player2 {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.width = 70
      this.height = 70
      this.velY = 0
      this.img = new Image()
      this.img.src =
        "https://raw.githubusercontent.com/ironhack-labs/lab-canvas-flappybirds/master/images/flappy.png"
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    moveUp() {
        this.velY -= 10
    }
    moveLeft() {
        this.velX -= 10
    }
    moveRight() {
        this.velX += 10
    }
    moveDown() {
        this.velY += 10
    }
  }

/*
class Obstacle1 {
    constructor(x,y) {
      this.x = x
      this.y = y
      this.width = 70
      this.height = 70
      this.img = new Image()
      this.img.src =
        "https://static.wikia.nocookie.net/portalworldsgame/images/2/27/Lava.png"
      }
    draw() {
        if (p1.x < this.x) {
        this.x--
      } else {
        this.x++
      }

      if (p1.y < this.y) {
        this.y--
      } else {
        this.y++
      }
    }
  }

  class Obstacle2 {
    constructor(y) {
      this.x = $canvas.width
      this.y = y
      this.width = 70
      this.height = 70
      this.img = new Image()
      this.img.src =
        "https://static.wikia.nocookie.net/portalworldsgame/images/2/27/Lava.png"
      }
    draw() {
        if (p2.x < this.x) {
        this.x--
      } else {
        this.x++
      }

      if (p2.y < this.y) {
        this.y--
      } else {
        this.y++
      }
    }
  }


  */