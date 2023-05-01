

class Item {
    constructor(x, array) {
        this.width = canvasData.width / array.length
        this.height = random(10, canvasData.height - 100)
        this.x = x
        this.y = canvasData.height - this.height
        this.color = {
            red: 0,
            green: 0,
            blue: 200
        }
    }

    show() {
        stroke(200)
        fill(this.color.red, this.color.green, this.color.blue)
        rect(this.x, this.y, this.width, this.height)
    }
}