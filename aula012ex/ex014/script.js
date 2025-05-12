function carregar(){
    var msg = window.document.getElementById('msg')
    var  img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
        if (hora >= 0 && hora < 12) {
            //bom dia!
            img.src = 'manhã.png'
            document.body.style.background = '#7293a2'
        } else if (hora >= 12 && hora <= 18){
            //boa tarde!
            img.src = 'tarde.png'
            document.body.style.background = '#fcbc98'
        } else {
            // boa nite
            img.scr = 'noite.png'
            document.body.style.background = '#574247'
        }
}
