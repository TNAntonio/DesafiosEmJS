let msg = document.getElementById('msg')

function converter(){
    const cotacao = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?').replace(',','.'))
    let reais = Number(prompt('Quantos R$ você tem na carteira?').replace(',','.'))
    let res = reais / cotacao
    msg.innerHTML = `Você irá conseguir comprar ${res.toFixed(2)} doláres com R$${reais.toFixed(2).replace(',','.')}`
}