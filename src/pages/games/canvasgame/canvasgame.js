const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight
canvas.width = innerWidth

class Player {
    constructor(x,y) {
        this.x = x
        this.y = y

        const pimg = new Image()
        pimg.src = 'img/Nave.png'
        this.image = pimg
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y)
    }
}

const player = new Player(100, 100)
player.draw()

console.log(player);