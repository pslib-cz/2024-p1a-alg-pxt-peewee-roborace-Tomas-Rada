radio.setTransmitSerialNumber(true)
radio.setTransmitPower(5)
radio.setGroup(2)
input.onButtonPressed(Button.A, function() {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function() {
    radio.sendNumber(2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    radio.sendNumber(3)
})
