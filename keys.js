// INPUT DE LOS USUARIOS
//DOS INPUTS UNO CON WASD Y OTRO CON ARRIBA/ABAJO/DERECHA/IZQUIERDA

document.addEventListener("keydown", event => {
    switch (event.keyCode) {
        case 87:
        // up
        p2.moveUp()
        break
      case 65:
        // left
        p2.moveLeft()
        break
      case 68:
        //right
        p2.moveRight()
        break
      case 83:
        //down
        p2.moveDown()
        break
      case 38:
        // up
        p2.moveUp()
        break
      case 37:
        // left
        p2.moveLeft()
        break
      case 39:
        //right
        p2.moveRight()
        break
      case 40:
        //down
        p2.moveDown()
        break
      default:
        break
    }
  })