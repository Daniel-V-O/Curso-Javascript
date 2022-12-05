function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] Verfique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sex = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            sex = 'Homem'
            if (idade > 0 && idade < 10){
                img.setAttribute('src', 'criança-m.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto-m.png')
            } else {
                img.setAttribute('src', 'idoso-m.png')
            }
        } else{
            sex = 'Mulher'
            if (idade > 0 && idade < 10){
                img.setAttribute('src', 'criança-f.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto-f.png')
            } else {
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sex} com ${idade} anos`
        res.appendChild(img)
    }
}