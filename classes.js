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