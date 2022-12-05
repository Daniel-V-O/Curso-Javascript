function contar(){
    var inicio = document.getElementById('txti')
    var final = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'Impossível contar.'
    alert('[Erro] Faltam dados!')
}else{
    res.innerHTML = 'Contando: <br>'
    var i = Number(inicio.value)
    var f = Number(final.value)
    var p = Number(passo.value)
    if (p <= 0){
        alert('PASSO inválido. Considerando PASSO 1...')
        p = 1
    }
    if(i < f){
        for (var c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
    }
    }else if(i > f){
        for(var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
}