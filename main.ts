input.onButtonPressed(Button.A, function () {
    urhajo.move(-1)
})
input.onButtonPressed(Button.B, function () {
    urhajo.move(1)
})
let urhajo: game.LedSprite = null
let meteorx = randint(0, 4)
let meteor = game.createSprite(0, meteorx)
meteor.turn(Direction.Right, 90)
game.setScore(0)
urhajo = game.createSprite(2, 4)
game.startCountdown(20000)
basic.forever(function () {
    meteor.move(1)
    if (urhajo.isTouching(meteor)) {
        game.gameOver()
    }
    basic.pause(300)
    if (meteor.get(LedSpriteProperty.Y) == 4) {
        meteorx = randint(0, 4)
        meteor.set(LedSpriteProperty.X, meteorx)
        meteor.set(LedSpriteProperty.Y, 0)
        game.addScore(1)
    }
})
