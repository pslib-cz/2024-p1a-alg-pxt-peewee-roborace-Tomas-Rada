radio.setTransmitSerialNumber(true)
radio.setTransmitPower(5)
radio.setGroup(2)
input.onButtonPressed(Button.A, function() {
    radio.sendNumber(1)
    basic.showNumber(1)
})
input.onButtonPressed(Button.B, function() {
    radio.sendNumber(2)
    basic.showNumber(2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    radio.sendNumber(3)
    basic.showNumber(3)
})
input.onButtonPressed(Button.AB, function() {
    radio.sendNumber(4)
    basic.showNumber(4)
})
