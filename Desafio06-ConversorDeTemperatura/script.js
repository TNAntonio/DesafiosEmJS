let txt1 = document.getElementById("txt1")
let txt2 = document.getElementById('txt2')

function converter(){
    let graus = Number(prompt('Digite uma temperatura em °C (Celsius)').replace('.',','))
    let kelvin = graus + 273.15
    let fahrenheit = graus * 9/5 + 32

    txt1.innerHTML = `A temperatura de ${graus}°C, corresponde a...`
    txt2.innerHTML = `${kelvin.toFixed(2)}°K (Kelvin) <br> ${fahrenheit.toFixed(2)}°F (Fahrenheit)`
}