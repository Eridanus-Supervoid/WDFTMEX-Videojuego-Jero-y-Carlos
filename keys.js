// INPUT DE LOS USUARIOS
//DOS INPUTS UNO CON WASD Y OTRO CON ARRIBA/ABAJO/DERECHA/IZQUIERDA

document.addEventListener("keydown", event => {
    switch (event.keyCode) {
        case 87:
        // up
        keys.push(87)
      
        break
      case 65:
        // left
        keys.push(65)
        
        break
      case 68:
        //right
        keys.push(68)
        
        break
      case 83:
        //down
        keys.push(83)
        
        break
      case 38:
        // up
        keys.push(38)
        
        break
      case 37:
        // left
        keys.push(37)
        break
      case 39:
        //right
        keys.push(39)
        break
      case 40:
        //down
        keys.push(40)
        break
      default:
        break
    }
  })

  document.addEventListener("keyup", event => {
    switch (event.keyCode) {
      case 87:
        keys = keys.filter(keys => keys !== 87)
        break
      case 65:
        keys = keys.filter(keys => keys !== 65)
        break
      case 68:
        keys = keys.filter(keys => keys !== 68)
        break
      case 83:
        keys = keys.filter(keys => keys !== 83)
        break
      case 38:
        keys = keys.filter(keys => keys !== 38)
        break
      case 37:
        keys = keys.filter(keys => keys !== 37)
        break
      case 39:
        keys = keys.filter(keys => keys !== 39)
        break
      case 40:
        keys = keys.filter(keys => keys !== 40)
        break
      default:
        break
  }
  })

