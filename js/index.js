const meterToFeet = 3.281
const litreToGallon = 0.264
const kilogramToPound = 2.204
const convertBtn = document.getElementById("convert-button")
let numberToConvertEl = document.getElementById("number-to-convert")
let convertedLengthEl = document.getElementById("converted-length")
let convertedVolumeEl = document.getElementById("converted-volume")
let convertedMassEl = document.getElementById("converted-mass")


convertBtn.addEventListener("click", function () {

    let baseValue = numberToConvertEl.value
    numberToConvertEl.value = ""


    convertedLengthEl.innerHTML = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`

    convertedVolumeEl.innerHTML = `${baseValue} litres = ${(baseValue * litreToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / litreToGallon).toFixed(3)} litres`

    convertedMassEl.innerHTML = `${baseValue} kilos = ${(baseValue * kilogramToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kilogramToPound).toFixed(3)} kilos`




})
