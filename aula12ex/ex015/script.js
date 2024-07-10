function verificar() {
   let data = new Date()
   let ano = data.getFullYear()
   let fano = document.getElementById('txtano')
   let res = document.querySelector('div#res')
   if (fano.ariaValueMax.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   }else  {
      let fsex = document.getElementsByName('radsex')
      let idade = ano - Number(fano.ariaValueMax)
      let gênero = ''
      let img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].ariaChecked) {
         gênero = 'Homem'
         if (idade >=0 && idade <10){
            //Criança
         }else if (dade >= 10 && idade <21){

         }
      }else if (fsex[1].ariaChecked) {
         gênero = 'Mulher'
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
   }
}