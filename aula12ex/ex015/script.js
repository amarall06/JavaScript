function verificar() {
   let data = new Date()
   let ano = data.getFullYear()
   let fano = document.getElementById('txtano')
   let res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else  {
      let fsex = document.getElementsByName('radsex')
      let idade = ano - Number(fano.value)
      let gênero = ''
      let img = document.createElement('img') // Clc imagem no JS
      img.setAttribute('id', 'foto') // a mesma coisa que colocar id em img no HTML
      if (fsex[0].checked) {
         gênero = 'Homem'
         if (idade >=0 && idade < 10){
            // Criança
            img.setAttribute('src', 'imagens/bebe menino.png')
         }else if (idade <21){
            // Jovem
            img.setAttribute('src', 'imagens/jovem homem.png')
         }else if(idade < 50) {
            // Adulto
            img.setAttribute('src', 'imagens/homem adulto.png')
         } else {
            // Idoso
            img.setAttribute('src', 'imagens/idoso.png')
         }
      }else if (fsex[1].checked) {
         gênero = 'Mulher'
         if (idade >=0 && idade <10){
            // Criança
            img.setAttribute('src', 'imagens/bebe menina.png')
         }else if (idade <21){
            // Jovem
            img.setAttribute('src', 'imagens/jovem mulher.png')
         }else if(idade < 50) {
            // Adulto
            img.setAttribute('src', 'imagens/mulher adulta.png')
         } else {
            // Idoso
            img.setAttribute('src', 'imagens/idosa.png')
         }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img) // vai adicionar depois desse codigo de cima
   }
}