var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia!')
} else if(hora > 12) {
    console.log('Boa Tarde!')
} else if (hora > 23){
    console.log('Boa Madrugada!')
}