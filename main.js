//AQUÍ LLAMAMOS LAS FUNCIONES

const board = new Board()
const p1 = new Player1(70, 70)
const p2 = new Player2(1100, 700)

let intervalId
let frames = 0
let keys = []
let score = 0
let playersPullStrength = 1.8

//update()
setInterval(update, 1000 / 60)