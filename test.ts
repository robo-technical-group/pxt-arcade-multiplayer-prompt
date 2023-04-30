// tests go here; this will not be compiled when this package is used as an extension.
/**
 * TODO
 * - [ ] game.splashForPlayer()
 * - [ ] game.showLongTextForPlayer()
 */
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
function getMessageForPlayer(player: number): string {
    return 'Player ' + (player + 1) + ' name: ' + names[player] + 
        ', favorite number: ' + favNums[player]
}
for (let i: number = 1; i <= 4; i++) {
    names.push(game.askPlayerForString(i, 'Player ' + i + ' enter name.'))
    favNums.push(game.askPlayerForNumber(i, 'Player ' + i + ' enter favorite number.'))
}
let message: string = ''
for (let i: number = 0; i < 4; i++) {
    message += getMessageForPlayer(i) + ' '
}
game.showLongText(message, DialogLayout.Full)
for (let i: number = 0; i < 4; i++) {
    game.splashForPlayer(i + 1, getMessageForPlayer(i))
    game.showLongTextForPlayer(i + 1, getMessageForPlayer(i), DialogLayout.Center)
}
