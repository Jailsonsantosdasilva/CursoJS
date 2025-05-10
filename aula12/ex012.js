 var agora = new Date()
 var hora = agora.getHours
 console.log(`agora são exatamente ${hora} horas.`)
 if (horas < 12) {
    console.log('Bom dia!')
 } else if(horas <= 18) {
    console.log('Boa tarde!')
 } else {
    console.log('Boa noite!')
 }