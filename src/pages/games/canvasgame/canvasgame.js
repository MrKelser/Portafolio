const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight
canvas.width = innerWidth

class Player {
    constructor(x,y,radio,color) {
        this.x = x
        this.y = y
        this.radio = radio
        this.color = color
    }
}

const player = new Player(100, 100, 100, 'blue')

console.log(player);