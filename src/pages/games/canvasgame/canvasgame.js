const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight
canvas.width = innerWidth

class Player {
    constructor(x,y) {

        const pimg = new Image()
        pimg.src = 'img/Nave.png'
        this.image = pimg

        this.x = x - this.image.width/2
        this.y = y - this.image.height/2
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y)
    }
}

const player = new Player(canvas.width/2 , canvas.height/2)
player.draw()

console.log(player);

function animate() {
    requestAnimationFrame(animate)
    player.draw()
}

animate()