function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.ariaValueMax.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   }else  {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.ariaValueMax)
      var gênero = ''
      var img = document.createElement('img')
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