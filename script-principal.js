const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let Mouse = {
    x: 0,
    y: 0
};

addEventListener("mousemove", function(event) {
    Mouse.x = event.clientX;
    Mouse.y = event.clientY;
});

class Circulo {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

const circulito = new Circulo(200, 200, 50, 'purple');
const circulito2 = new Circulo(200, 200, 20, "blue");


function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circulito.draw();
    circulito2.draw();
    circulito2.x = Mouse.x;
    circulito2.y = Mouse.y;
    if (getDistance(circulito.x, circulito.y, circulito2.x, circulito2.y) < circulito.radius + circulito2.radius) {
        circulito.color = "black";
    } else {
        circulito.color = "purple"
    }
}

intervalId = setInterval(update, 1000 / 60)