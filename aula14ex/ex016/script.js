function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ // se todos os blocos ficarem em branco
        res.innerHTML = 'Impossivel Contar!'
        //window.alert('[ERRO] Faltam Dados!')
    }else {
      res.innerHTML = 'Contando: '
      var i = Number(ini.value)
      var f = Number(fim.value)
      var p = Number(passo.value)
      if(p <= 0){
        window.alert('Passo invalido!')
      }
      if( i <f){ 
                //Contagem Crescente
        for(var c = i ; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}` //adicionar emojis 
         }
        }else {
                //Contagem regressiva
            for (c = i ;c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` //adicionar emojis no final
     }
 }