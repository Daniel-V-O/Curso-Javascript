function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        imagem.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 20){
        imagem.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else{
        imagem.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}

