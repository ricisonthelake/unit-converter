const meterToFeet = 3.281
const litreToGallon = 0.264
const kilogramToPound = 2.204
const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("unit-input")
let lengthEl = document.getElementById("converted-length")
let volumeEl = document.getElementById("converted-volume")
let massEl = document.getElementById("converted-mass")

convertBtn.addEventListener("click", function () {

    let baseValue = inputEl.value

    lengthEl.innerHTML = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`

    volumeEl.innerHTML = `${baseValue} litres = ${(baseValue * litreToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / litreToGallon).toFixed(3)} litres`

    massEl.innerHTML = `${baseValue} kilos = ${(baseValue * kilogramToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kilogramToPound).toFixed(3)} kilos`

})

