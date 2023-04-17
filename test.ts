// tests go here; this will not be compiled when this package is used as an extension.
// Setup Multiplayer
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function() {
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
})
let names: string[] = []
let favNums: number[] = []
for (let i: number = 1; i <= 4; i++) {
    names.push(game.askPlayerForString(i, 'Player ' + i + ' enter name.'))
    favNums.push(game.askPlayerForNumber(i, 'Player ' + i + ' enter favorite number.'))
}
let message: string = ''
for (let i: number = 0; i < 4; i++) {
    message += 'Player ' + (i + 1) + ' name: ' + names[i] + ', favorite number: ' + favNums[i] + ' '
}
game.showLongText(message, DialogLayout.Full)
