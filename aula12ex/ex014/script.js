function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    //var hora = data.getHours()
    var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#e1cd9f'
    }else if (hora >=12 && hora <= 18){
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#9c7d69'
    }else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#140c11'
    }

}