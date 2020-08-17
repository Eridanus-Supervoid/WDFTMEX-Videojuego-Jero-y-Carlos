const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")

class Player1 {
    constructor(x,y){
        this.x = x
        this.y = y
        this.width = 70
        this.heigth = 70
        this.img = new Image()
        this.img.src ="https://i.etsystatic.com/8960811/r/il/6b3848/1028207441/il_570xN.1028207441_og72.jpg"
        this.img.onload = () =>{
            this.draw
        }

    }
    

}



//https://i.etsystatic.com/8960811/r/il/263350/1028207185/il_570xN.1028207185_35tu.jpg