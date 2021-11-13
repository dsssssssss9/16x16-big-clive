function initial_display () {
    for (let xcoord = 0; xcoord <= 15; xcoord++) {
        for (let ycoord = 0; ycoord <= 15; ycoord++) {
            matrix.setPixel(ycoord, xcoord, neopixel.colors(NeoPixelColors.Blue))
        }
    }
}
let matrix: SmartMatrix.Matrix = null
matrix = SmartMatrix.create(
DigitalPin.P2,
16,
16,
NeoPixelMode.RGB
)
matrix.clear()
matrix.Brightness(8)
matrix.show()
basic.showIcon(IconNames.Heart)
initial_display()
basic.pause(5000)
basic.forever(function () {
    matrix.setPixel(randint(0, 15), randint(0, 15), neopixel.colors(NeoPixelColors.Black))
    matrix.setPixel(randint(0, 15), randint(0, 15), neopixel.colors(NeoPixelColors.Blue))
    matrix.show()
    basic.pause(16)
})
