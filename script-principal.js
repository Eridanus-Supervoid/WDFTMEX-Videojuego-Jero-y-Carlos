const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const $divPrincipal = document.querySelector(".divPrincipal")

const $landingPage = document.createElement("div");
$landingPage.classList.add("logo");
$divPrincipal.appendChild($landingPage);

const $logoLanding = document.createElement("div")
$logoLanding.classList.add("logo");
$logoLanding.innerHTML = `<img src="Images/path548770.png" alt="Logo-Gravity" class="logo">`
$landingPage.appendChild($logoLanding);

const gameOverSound = new Audio("Audios/gameOver.wav");
gameOverSound.volume = 0.4;

$divPrincipal.addEventListener('click', () => {
    $logoLanding.style.display = 'none';
    $divPrincipal.style.display = 'none';
    gameOverSound.play();
    startGame();
})

function startGame() {
    let ancho = canvas.width;
    let alto = canvas.height;
    let score = 0;
    let cuentaGameOver = 0;

    const colisionSound = new Audio("Audios/colision.wav");
    const colisionSound2 = new Audio("Audios/colision2.wav");
    colisionSound.volume = 0.4;
    const absorptionSound = new Audio("Audios/absorption.wav");
    absorptionSound.volume = 0.4;
    const soundTrack = new Audio("Audios/anzo-moonbound105.mp3");
    soundTrack.volume = 0.1;


    let imageLogo = new Image();
    imageLogo.src = "Images/path548770.png";

    let cosoLocochon = [];
    let cosoLocochonDos = [];

    let imgPlayers = ["Images/Planeta1a.png", "Images/Planeta2a.png"]

    let friction = 0.9,
        keys = [],
        particulas = [],
        particulasDos = [],
        frames = 0,
        intervalId;

    class Background {
        constructor() {
            this.x = 0
            this.y = 0
            this.width = canvas.width
            this.height = canvas.height
            this.img = new Image()
            this.img.src = "Images/1.jpg"
            this.img.onload = () => {
                this.draw()
            }
        }
        draw() {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }
    }

    class AttractorUser {
        constructor(x, y, radius, color, nombre, imgPlayers) {
            this.x = x;
            this.nombre = nombre;
            this.y = y;
            this.width = radius * 2;
            this.height = radius * 2;
            this.img = new Image()
            this.img.src = imgPlayers;
            this.velx = 0;
            this.vely = 0;
            this.accx = 0;
            this.accy = 0;
            this.radius = radius;
            this.color = color;
            this.mass = 2;
            this.img.onload = () => {
                this.draw()
            }
        }
        draw() {
            // ctx.beginPath();
            // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            // ctx.fillStyle = this.color;
            // ctx.fill();
            // ctx.closePath();
            ctx.drawImage(this.img, this.x - this.radius, this.y - this.radius, this.width, this.height)
        }
        changePosition() {

            this.x += this.velx;
            this.velx += this.accx
            this.accx *= friction;
            this.y += this.vely;
            this.vely += this.accy;
            this.accy *= friction;

            if (this.velx > 7) {
                this.velx = 7;
            }
            if (this.velx <= -7) {
                this.velx = -7
            }
            if (this.vely > 7) {
                this.vely = 7;
            }
            if (this.vely <= -7) {
                this.vely = -7
            }

            if (this.x >= ancho - 100 - this.radius) {
                // this.x = 700 - this.radius;
                isGameOver(this.nombre);
            }
            if (this.x - this.radius <= 100) {
                // this.x = 100 + this.radius;
                isGameOver(this.nombre);
            }

            if (this.y >= alto - 100 - this.radius) {
                // this.y = 500 - this.radius;
                isGameOver(this.nombre);
            }
            if (this.y - this.radius <= 100) {
                // this.y = 100 + this.radius;
                isGameOver(this.nombre);
            }
        }
        arrtacted(posAttractorX, posAttractorY) {
            // al vector target le restamos la posición y esto me da como resultado un nuevo "vector"
            let forceX = posAttractorX - this.x;
            let forceY = posAttractorY - this.y;
            let nativeMag = Math.sqrt(forceX * forceX + forceY * forceY);
            let dsquared = Math.sqrt(nativeMag);
            if (dsquared > 20) {
                dsquared = 20;
            }
            if (dsquared < 1) {
                dsquared = 1
            }
            let grav = 1;
            let strength = (grav / dsquared);
            let forceXNew = forceX * strength / nativeMag;
            let forceYNew = forceY * strength / nativeMag;
            this.accx = forceXNew;
            this.accy = forceYNew;
        }
    }

    class Particle {
        constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.width = radius * 2;
            this.height = radius * 2;
            // this.img = new Image();
            // this.img.src = "Images/Asteroide1a.png"
            this.velx = 0;
            this.vely = 0;
            this.accx = 0;
            this.accy = 0;
            this.radius = radius;
            this.color = color;
            this.mass = 2;
        }


        draw() {
            // ctx.drawImage(this.img, this.x - this.radius, this.y - this.radius, this.width, this.height)
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        changePosition() {
            this.y += this.vely
            this.vely += this.accy
            this.x += this.velx
            this.velx += this.accx

            if (this.velx > 7) {
                this.velx = 7;
            }
            if (this.velx <= -7) {
                this.velx = -7
            }
            if (this.vely > 7) {
                this.vely = 7;
            }
            if (this.vely <= -7) {
                this.vely = -7
            }
            if (this.x - this.radius <= 0 || this.x + this.radius >= ancho) {
                this.velx = -this.velx
            }
            if (this.y - this.radius <= 0 || this.y + this.radius >= alto) {
                this.vely = -this.vely
                if (this.x >= ancho - this.radius) {
                    this.x = alto - this.radius;
                }
                if (this.x - this.radius <= 0) {
                    this.x = 0 + this.radius;
                }

                if (this.y >= alto - this.radius) {
                    this.y = alto - this.radius;
                }
                if (this.y - this.radius <= 0) {
                    this.y = 0 + this.radius;
                }
            }

        }

        arrtacted(posAttractorX, posAttractorY) {
            // al vector target le restamos la posición y esto me da como resultado un nuevo "vector"
            let forceX = posAttractorX - this.x;
            let forceY = posAttractorY - this.y;
            let nativeMag = Math.sqrt(forceX * forceX + forceY * forceY);
            let dsquared = Math.sqrt(nativeMag);
            if (dsquared > 20) {
                dsquared = 20;
            }
            if (dsquared < 1) {
                dsquared = 1
            }
            let grav = 7;
            let strength = (grav / dsquared);
            let forceXNew = forceX * strength / nativeMag;
            let forceYNew = forceY * strength / nativeMag;
            this.accx = forceXNew;
            this.accy = forceYNew;
        }
    }


    function creadoraDeCosos(num) {
        for (let index = 0; index < num; index++) {
            cosoLocochon[index] = true;
            // let color = "#FF" + azar(99) + "" + azar(99);
            let color = "rgba(" + (azar(135) + 20) + "," + azar(0) + "," + (azar(135) + 120) + ")";
            // color = "#8000" + azar(99);
            let porDondeSalen = azar(4);
            switch (porDondeSalen) {
                case 0:
                    //ARRIBA
                    particulas.push(new Particle(azar(ancho), 50, azar(8) + 4, color));
                    break;
                case 1:
                    //ABAJO
                    particulas.push(new Particle(azar(ancho), (alto - 50), azar(8) + 4, color));
                    break;
                case 2:
                    //IZQUIERDA
                    particulas.push(new Particle(50, azar(alto), azar(8) + 4, color));
                    break;
                case 3:
                    //DERECHA
                    particulas.push(new Particle((ancho - 50), azar(alto), azar(8) + 4, color));
                    break;

                default:
                    break;
            }
        }
    }

    function creadoraDeCososDos(num) {
        for (let index = 0; index < num; index++) {
            cosoLocochonDos[index] = true;
            // let color = "#FF" + azar(99) + "" + azar(99);
            color = "rgba(" + (azar(135) + 120) + "," + azar(0) + "," + (azar(135) + 20) + ")";
            // color = "#ffa5" + azar(99);
            let porDondeSalen = azar(4);
            switch (porDondeSalen) {
                case 0:
                    //ARRIBA
                    particulasDos.push(new Particle(azar(ancho), 50, azar(8) + 4, color));
                    break;
                case 1:
                    //ABAJO
                    particulasDos.push(new Particle(azar(ancho), (alto - 50), azar(8) + 4, color));
                    break;
                case 2:
                    //IZQUIERDA
                    particulasDos.push(new Particle(50, azar(alto), azar(8) + 4, color));
                    break;
                case 3:
                    //DERECHA
                    particulasDos.push(new Particle((ancho - 50), azar(alto), azar(8) + 4, color));
                    break;

                default:
                    break;
            }
        }
    }


    function azar(numeroAzar) {
        return Math.floor(Math.random() * numeroAzar);
    }


    function getDistance(x1, y1, x2, y2) {
        let xDistancia = x2 - x1;
        let yDistancia = y2 - y1;
        return Math.sqrt(Math.pow(xDistancia, 2) + Math.pow(yDistancia, 2));
    }

    function isColisionated(objeto1, objeto2) {
        if (getDistance(objeto1.x, objeto1.y, objeto2.x, objeto2.y) < (objeto1.radius + objeto2.radius)) {
            return true;
        } else {
            return false;
        }
    }

    function checkKeys() {
        if (keys[87]) {
            attractorUser01.vely--;
        }
        if (keys[83]) {
            attractorUser01.vely++
        }
        if (keys[65]) {
            attractorUser01.velx--
        }
        if (keys[68]) {
            attractorUser01.velx++
        }
    }

    function checkKeys1() {
        if (keys[38]) {
            attractorUser02.vely--;
        }
        if (keys[40]) {
            attractorUser02.vely++;
        }
        if (keys[37]) {
            attractorUser02.velx--;
        }
        if (keys[39]) {
            attractorUser02.velx++;
        }
    }

    document.addEventListener("keydown", event => {
        keys[event.keyCode] = true
    })
    document.addEventListener("keyup", event => {
        keys[event.keyCode] = false
    })

    const background = new Background();
    const attractorUser01 = new AttractorUser(150, (alto - 150), 30, 'purple', "Purpurita", imgPlayers[0]);
    const attractorUser02 = new AttractorUser((ancho - 150), 150, 30, 'orange', "Naranjon", imgPlayers[1]);

    creadoraDeCosos(1);
    creadoraDeCososDos(1);

    const Restart = {
        restart: ctx.fillText(`RESTART`, ancho / 2 - 150, alto / 2 + 150)
    }


    function update() {
        if (frames > 1) {
            soundTrack.play()
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "dimgray";
        ctx.fillRect(0, 0, ancho, alto);
        ctx.fillStyle = "white";
        ctx.fillRect(100, 100, (ancho - 200), (alto - 200));
        background.draw();
        attractorUser01.draw();
        attractorUser02.draw();
        attractorUser01.changePosition();
        attractorUser02.changePosition();
        attractorUser02.arrtacted(attractorUser01.x, attractorUser01.y);
        attractorUser01.arrtacted(attractorUser02.x, attractorUser02.y);

        for (let i = 0; i < particulas.length; i++) {
            if (cosoLocochon[i]) {
                if (isColisionated(attractorUser01, particulas[i])) {
                    absorptionSound.play();
                    particulas.splice(i, 1);
                    cosoLocochon[i] = false;
                }
                if (isColisionated(attractorUser02, particulas[i])) {
                    colisionSound.play();
                    attractorUser02.velx = (attractorUser01.x - attractorUser02.x) * 0.05;
                    attractorUser02.vely = (attractorUser01.y - attractorUser02.y) * 0.05;
                    particulas.splice(i, 1);
                    cosoLocochon[i] = false;
                } else {
                    particulas[i].arrtacted(attractorUser01.x, attractorUser01.y);
                    particulas[i].changePosition();
                    particulas[i].draw();
                    creadoraDeCosos(1 + score);
                }
            }
        }


        for (let i = 0; i < particulasDos.length; i++) {
            if (cosoLocochonDos[i]) {
                if (isColisionated(attractorUser02, particulasDos[i])) {
                    absorptionSound.play();
                    particulasDos.splice(i, 1);
                    cosoLocochonDos[i] = false;
                }
                if (isColisionated(attractorUser01, particulasDos[i])) {
                    colisionSound.play();
                    attractorUser01.velx = (attractorUser02.x - attractorUser01.x) * 0.05;
                    attractorUser01.vely = (attractorUser02.y - attractorUser01.y) * 0.05;
                    particulasDos.splice(i, 1);
                    cosoLocochonDos[i] = false;
                } else {
                    particulasDos[i].arrtacted(attractorUser02.x, attractorUser02.y);
                    particulasDos[i].changePosition();
                    particulasDos[i].draw();
                    creadoraDeCososDos(1 + score);
                }
            }
        }


        checkKeys();
        checkKeys1();
        frames++;
        if (frames % 60 === 0) {
            score++;
        }

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ancho, 100);
        ctx.fillRect(0, 0, 100, alto);
        ctx.fillRect(ancho - 100, 0, 100, alto);
        ctx.fillRect(0, alto - 100, ancho, 100);
        ctx.drawImage(imageLogo, ancho / 2 - 20, 20, 60, 75)
        ctx.font = `40px 'Gameplay'`;
        ctx.fillStyle = "white";
        ctx.fillStyle = "white";
        ctx.fillText("Score: " + score, ancho / 2 - 100, 700);

        if (isColisionated(attractorUser01, attractorUser02)) {
            colisionSound2.play();
            isGameOver();
        }

    }

    function isGameOver(quien = "colision") {
        cuentaGameOver++
        if (cuentaGameOver >= 2) {
            gameOverSound.play();
            clearInterval(intervalId);
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
            ctx.fillRect(0, 0, ancho, alto)
            ctx.font = `80px 'Gameplay'`;
            ctx.fillStyle = "white";
            ctx.fillStyle = "white";
            ctx.fillText(`GAME OVER | Score: ${score}`, ancho / 2 - 490, alto / 2 + 30);
            ctx.font = `60px 'Gameplay'`;

            const $divSecundario = document.querySelector(".divSecundario")

            const $endingPage = document.createElement("div");
            $endingPage.classList.add("logo1");
            $divSecundario.appendChild($endingPage);

            const $restartText = document.createElement("h2")
            $restartText.classList.add("logo1");
            $restartText.innerText = `RESTART`
            $endingPage.appendChild($restartText);

            $divSecundario.style.display = 'block'
            $restartText.style.display = 'block';
            $divSecundario.addEventListener('click', () => {
                $restartText.style.display = 'none';
                $divSecundario.style.display = 'none';
                gameOverSound.play();
                document.location.reload();
            })

            // ctx.fillText(`RESTART`, ancho / 2 - 150, alto / 2 + 150)
            // alert("GAME OVER por culpa de " + quien + ", tu puntuación es de: " + score);
            // document.location.reload();

        }
    }
    intervalId = setInterval(update, 1000 / 60)
}