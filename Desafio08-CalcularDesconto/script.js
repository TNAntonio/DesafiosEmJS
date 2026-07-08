let msg1 = document.getElementById('msg1')
let msg2 = document.getElementById('msg2')

function calcular(){
    const produto = prompt('Qual é o produto que você está comprando?')
    const valor = Number(prompt(`Qual é o preço de ${produto}?`).replace(',','.'))
    const desconto = valor * 0.10
    const precoFinal = valor - desconto
    msg1.innerHTML = `Calculando o desconto de 10% para ${produto}`
    msg2.innerHTML = `O preço original era R$${valor.toFixed(2)}. <br>
                      Você acaba de ganhar R${desconto.toFixed(2)} de desconto (-10%). <br>
                      No fim, você vai pagar R$${precoFinal.toFixed(2)} no produto ${produto}.`
}
