namespace game {
    const MULTIPLAYER_FRAMES: Image[] = [
        img`
            . . . . . . . . . . . .
            . b b b b b b b b b b .
            . b b b b b b b b b b c
            . b b d 1 1 1 1 d b b c
            . b b 1 1 1 1 1 1 b b c
            . b b 1 1 1 1 1 1 b b c
            . b b 1 1 1 1 1 1 b b c
            . b b 1 1 1 1 1 1 b b c
            . b b d 1 1 1 1 d b b c
            . b b b b b b b b b b c
            . b b b b b b b b b b c
            . . c c c c c c c c c c
        `,
        img`
            . . . . . . . . . . . .
            . 3 3 3 3 3 3 3 3 3 3 .
            . 3 3 3 3 3 3 3 3 3 3 2
            . 3 3 d 1 1 1 1 d 3 3 2
            . 3 3 1 1 1 1 1 1 3 3 2
            . 3 3 1 1 1 1 1 1 3 3 2
            . 3 3 1 1 1 1 1 1 3 3 2
            . 3 3 1 1 1 1 1 1 3 3 2
            . 3 3 d 1 1 1 1 d 3 3 2
            . 3 3 3 3 3 3 3 3 3 3 2
            . 3 3 3 3 3 3 3 3 3 3 2
            . . 2 2 2 2 2 2 2 2 2 2
        `,
        img`
            . . . . . . . . . . . .
            . 9 9 9 9 9 9 9 9 9 9 .
            . 9 9 9 9 9 9 9 9 9 9 8
            . 9 9 d 1 1 1 1 d 9 9 8
            . 9 9 1 1 1 1 1 1 9 9 8
            . 9 9 1 1 1 1 1 1 9 9 8
            . 9 9 1 1 1 1 1 1 9 9 8
            . 9 9 1 1 1 1 1 1 9 9 8
            . 9 9 d 1 1 1 1 d 9 9 8
            . 9 9 9 9 9 9 9 9 9 9 8
            . 9 9 9 9 9 9 9 9 9 9 8
            . . 8 8 8 8 8 8 8 8 8 8
        `,
        img`
            . . . . . . . . . . . .
            . 5 5 5 5 5 5 5 5 5 5 .
            . 5 5 5 5 5 5 5 5 5 5 4
            . 5 5 d 1 1 1 1 d 5 5 4
            . 5 5 1 1 1 1 1 1 5 5 4
            . 5 5 1 1 1 1 1 1 5 5 4
            . 5 5 1 1 1 1 1 1 5 5 4
            . 5 5 1 1 1 1 1 1 5 5 4
            . 5 5 d 1 1 1 1 d 5 5 4
            . 5 5 5 5 5 5 5 5 5 5 4
            . 5 5 5 5 5 5 5 5 5 5 4
            . . 4 4 4 4 4 4 4 4 4 4
        `,
        img`
            . . . . . . . . . . . .
            . 7 7 7 7 7 7 7 7 7 7 .
            . 7 7 7 7 7 7 7 7 7 7 6
            . 7 7 d 1 1 1 1 d 7 7 6
            . 7 7 1 1 1 1 1 1 7 7 6
            . 7 7 1 1 1 1 1 1 7 7 6
            . 7 7 1 1 1 1 1 1 7 7 6
            . 7 7 1 1 1 1 1 1 7 7 6
            . 7 7 d 1 1 1 1 d 7 7 6
            . 7 7 7 7 7 7 7 7 7 7 6
            . 7 7 7 7 7 7 7 7 7 7 6
            . . 6 6 6 6 6 6 6 6 6 6
        `,
    ]
    const MULTIPLAYER_FRAMES_SPLASH: Image[] = [
        img`
            1 1 1
            f f f
            1 1 1
        `,
        img`
            2 2 2
            f f f
            2 2 2
        `,
        img`
            8 8 8
            f f f
            8 8 8
        `,
        img`
            4 4 4
            f f f
            4 4 4
        `,
        img`
            7 7 7
            f f f
            7 7 7
        `,
    ]
    /**
     * Show a long text string in a dialog box that will scroll
     * using the "A" or "down" buttons. The previous section of the
     * text is shown using the "up" button. This function
     * halts execution until the last page of text is dismissed.
     *
     * @param player The player (1 to 4) to prompt
     * @param str The text to display
     * @param layout The layout to use for the dialog box
     */
    //% blockId=game_show_long_text_for_player group="Dialogs"
    //% block="show player %player long text %str %layout"
    //% player.defl="1"
    //% player.min=1
    //% player.max=4
    //% str.shadow=text
    //% help=game/show-long-text-for-player
    export function showLongTextForPlayer(player: number, str: any, layout: DialogLayout) {
        if (player < 1 || player > 4 || player % 1 != 0) {
            throw "Player must be an integer between 1 and 4."
        }
        str = console.inspect(str);
        controller._setUserEventsEnabled(false);
        game.pushScene();
        game.currentScene().flags |= scene.Flag.SeeThrough;

        let width: number;
        let height: number;
        let top: number;
        let left: number;

        switch (layout) {
            case DialogLayout.Bottom:
                width = screen.width - 4;
                height = Math.idiv(screen.height, 3) + 5;
                top = screen.height - height;
                left = screen.width - width >> 1;
                break;
            case DialogLayout.Top:
                width = screen.width - 4;
                height = Math.idiv(screen.height, 3) + 5;
                top = 0;
                left = screen.width - width >> 1;
                break;
            case DialogLayout.Left:
                width = Math.idiv(screen.width, 3) + 5;
                height = screen.height;
                top = 0;
                left = 0;
                break;
            case DialogLayout.Right:
                width = Math.idiv(screen.width, 3) + 5;
                height = screen.height;
                top = 0;
                left = screen.width - width;
                break;
            case DialogLayout.Center:
                width = Math.idiv(screen.width << 1, 3);
                height = Math.idiv(screen.width << 1, 3);
                top = (screen.height - height) >> 1;
                left = (screen.width - width) >> 1;
                break;
            case DialogLayout.Full:
                width = screen.width;
                height = screen.height;
                top = 0;
                left = 0;
                break;
        }

        const dialog = new Dialog(width, height, MULTIPLAYER_FRAMES[player]);
        const s = sprites.create(dialog.image, -1);
        s.top = top;
        s.left = left;

        dialog.setText(str)
        let pressed = true;
        let done = false;

        let upPressed = true;

        game.onUpdate(() => {
            dialog.update();
            const currentState = controller.A.isPressed() || 
                controller.down.isPressed() ||
                (player == 2 && controller.player2.isPressed(ControllerButton.A)) || 
                (player == 2 && controller.player2.isPressed(ControllerButton.Down)) ||
                (player == 3 && controller.player3.isPressed(ControllerButton.A)) ||
                (player == 3 && controller.player3.isPressed(ControllerButton.Down)) ||
                (player == 4 && controller.player4.isPressed(ControllerButton.A)) ||
                (player == 4 && controller.player4.isPressed(ControllerButton.Down));
            if (currentState && !pressed) {
                pressed = true;
                if (dialog.hasNext()) {
                    dialog.nextPage();
                }
                else {
                    scene.setBackgroundImage(null); // GC it
                    game.popScene();
                    done = true;
                }
            }
            else if (pressed && !currentState) {
                pressed = false;
            }

            const moveBack = controller.up.isPressed() ||
                (player == 2 && controller.player2.isPressed(ControllerButton.Up)) ||
                (player == 3 && controller.player3.isPressed(ControllerButton.Up)) ||
                (player == 4 && controller.player4.isPressed(ControllerButton.Up));
            if (moveBack && !upPressed) {
                upPressed = true;
                if (dialog.hasPrev()) {
                    dialog.prevPage();
                }
            }
            else if (upPressed && !moveBack) {
                upPressed = false;
            }
        })

        pauseUntil(() => done);
        controller._setUserEventsEnabled(true);
    }

    /**
     * Show a title and an optional subtitle menu
     * @param player The player (1 to 4) to prompt
     * @param title
     * @param subtitle
     */
    //% weight=90 help=game/splash
    //% blockId=gameSplashForPlayer block="splash %title for player %player||%subtitle"
    //% player.defl="1"
    //% player.min=1
    //% player.max=4
    //% title.shadow=text
    //% subtitle.shadow=text
    //% group="Prompt"
    export function splashForPlayer(player: number, title: any, subtitle?: any) {
        if (player < 1 || player > 4 || player % 1 != 0) {
            throw "Player must be an integer between 1 and 4."
        }
        title = console.inspect(title);
        subtitle = subtitle ? console.inspect(subtitle) : subtitle;
        controller._setUserEventsEnabled(false);
        game.pushScene();
        game.currentScene().flags |= scene.Flag.SeeThrough;

        const dialog = new SplashDialog(screen.width, subtitle ? 42 : 35);
        dialog.frame = MULTIPLAYER_FRAMES_SPLASH[player]
        dialog.setText(title);
        if (subtitle) dialog.setSubtext(subtitle);

        const s = sprites.create(dialog.image, -1);
        let pressed = true;
        let done = false;

        game.onUpdate(() => {
            dialog.update();
            const currentState = controller.A.isPressed() ||
                (player == 2 && controller.player2.isPressed(ControllerButton.A)) ||
                (player == 3 && controller.player3.isPressed(ControllerButton.A)) ||
                (player == 4 && controller.player4.isPressed(ControllerButton.A));
            if (currentState && !pressed) {
                pressed = true;
                scene.setBackgroundImage(null); // GC it
                game.popScene();
                done = true;
            }
            else if (pressed && !currentState) {
                pressed = false;
            }
        })

        pauseUntil(() => done);
        controller._setUserEventsEnabled(true);
    }
}