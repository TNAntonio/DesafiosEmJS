function calcular(){
    let produto = prompt('Que produto você esta comprando?')
    let preco = prompt(`Quanto custa ${produto} que você está comprando?`)
    let valor_enviado = prompt(`Qual foi o valor que você deu para pagar ${produto}?`)
    alert(`Você comprou ${produto} que custou R$${preco}. \nDeu R$${valor_enviado} em dinheiro e vai receber ${valor_enviado - preco} de troco. \nVolte Sempre!`)
}