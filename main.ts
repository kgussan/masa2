basic.showLeds(`
    # . . . #
    # . . # .
    . . # . .
    . # . . .
    # . . . .
    `)
basic.showLeds(`
    . . . # .
    . . # . .
    . # . . .
    . # # . .
    # . . # #
    `)
basic.showLeds(`
    . # . . .
    # # # . #
    . # . . .
    . . # # .
    . # # . .
    `)
basic.showLeds(`
    # . . . .
    . # . # .
    . . # . .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . # . . .
    # # # # #
    . . # . .
    # # # # #
    . . . # .
    `)
basic.showLeds(`
    . # . . .
    # # # . .
    . # . . .
    # # # . #
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    . # # . #
    # . # # #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . # . . .
    . . # # .
    . # # # .
    `)
basic.showLeds(`
    . # . . .
    . # # # .
    . # . . .
    # # # . .
    # # # . .
    `)
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.showLeds(`
        # . . # .
        # . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . # # . .
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . # .
        . # . # .
        # . . . #
        `)
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index < 4; index++) {
        music.playMelody("C D E F G A B C5 ", 120)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . # . . .
        # # # . #
        . # . . .
        # # # # .
        # # . # .
        `)
    basic.showLeds(`
        . # # # .
        . . . . .
        # # # # #
        . . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . .
        # # # # .
        # # . # .
        `)
    basic.showLeds(`
        . # # # .
        . . . . .
        # # # # #
        . . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . .
        # # # # .
        # # . # .
        `)
    basic.showLeds(`
        . # # # .
        . . . . .
        # # # # #
        . . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . .
        # # # # .
        # # . # .
        `)
    basic.showLeds(`
        . # # # .
        . . . . .
        # # # # #
        . . . . #
        . # # # .
        `)
})
