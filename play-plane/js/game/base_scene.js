class BaseScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.debugModeEnable = true
    }

    addElement(gameImage) {
        gameImage.scene = this
        this.elements.push(gameImage)
    }

    delElement(index) {
        this.elements.splice(index, 1)
    }

    draw() {
        for (var e of this.elements){
            // this.game.drawImage(e)
            e.draw()
        }
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    update() {
        if (this.debugModeEnable) {
            for (var i = 0; i < this.elements.length; i++){
                var e = this.elements[i]
                e.debug && e.debug()
            }
        }
        for (var i = 0; i < this.elements.length; i++){
            var e = this.elements[i]
            e.update()
        }
    }

}
