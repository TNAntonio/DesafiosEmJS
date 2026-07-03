let txt1 = document.getElementById('txt1')
let txt2 = document.getElementById('txt2')
function converter(){
    let dist = Number(prompt('Digite uma distância em metros (m)').replace(',', '.'))

    txt1.innerText = `A distância de ${dist} metros, corresponde a...`
    
    txt2.innerText = ` 
        ${(dist / 1000).toFixed(3)} quilômetros (Km)
        ${(dist / 100).toFixed(3)} hectômetros (Hm)
        ${(dist / 10).toFixed(3)} decâmetro (Dam)
        ${(dist * 10).toFixed(1)} decímetros (dm)
        ${(dist * 100).toFixed(0)} centímetro (cm)
        ${(dist * 1000).toFixed(0)} milímetros (mm)
        `
}