const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight
canvas.width = window.innerWidth

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

const player = new Player(canvas.width/2, canvas.height/2)
player.draw()

console.log(player);

function animate() {
    requestAnimationFrame(animate)
    player.draw()
}

animate()