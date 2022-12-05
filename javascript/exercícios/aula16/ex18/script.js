var vetor = []
var num = document.getElementById('txtnum')
var lista = document.getElementById('lissec')
var res = document.getElementById('res')

function adicionar(){
    if (num.value.length == 0){
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        var n = Number(num.value)
        var pos = vetor.indexOf(n)
        if (pos == -1 && n <= 100 && n > 0){
            vetor.push(n)
            var item = document.createElement('option')
            item.text = `Valor ${n} foi adicionado.`
            lista.appendChild(item)
            res.innerHTML = ''
        } else{
            window.alert('Valor inválido ou já encontrado na lista.')
        }
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (vetor.length == 0){
        window.alert('Impossível finalizar sem números.')
    } else{
        var total = vetor.length
        var maior = vetor[0]
        var menor = vetor[0]
        var soma = 0
        var media = 0
        for (pos in vetor){
            if (vetor[pos] > maior){
                maior = vetor[pos]
            }
            if (vetor[pos] < menor){
                menor = vetor[pos]
            }
            soma += vetor[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores informados é de ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores informados é de ${media} </p>`
        
    }
}

