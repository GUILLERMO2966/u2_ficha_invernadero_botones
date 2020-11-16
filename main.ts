let Humedad = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 8) {
        basic.showString("T_BAJA")
    }
    while (input.temperature() > 30) {
        basic.showString("T_ALTA")
    }
})
input.onButtonPressed(Button.B, function () {
    Humedad = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    while (pins.analogReadPin(AnalogPin.P0) < 200) {
        basic.showString("H_BAJA")
    }
    while (pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showString("H_ALTA")
    }
})
