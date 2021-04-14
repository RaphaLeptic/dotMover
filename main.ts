let left = false
let maxScale = 0
let knob2Value = 0
let knobValue = 0
function showDot (value: number, maxValue: number, leftSide: boolean) {
    if (leftSide) {
        if (value < 204) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `)
        } else if (value < 408) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                `)
        } else if (value < 612) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
        } else if (value < 816) {
            basic.showLeds(`
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (value < 1020) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else {
        if (value < 204) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                `)
        } else if (value < 408) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                `)
        } else if (value < 612) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                `)
        } else if (value < 816) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (value < 1020) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    basic.pause(100)
}
input.onButtonPressed(Button.A, function () {
    left = true
})
input.onButtonPressed(Button.B, function () {
    left = false
})
basic.forever(function () {
    maxScale = 1023
    knob2Value = pins.analogReadPin(AnalogPin.P0)
    knobValue = pins.analogReadPin(AnalogPin.P2)
    showDot(knobValue, maxScale, left)
})
