function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.src = 'assets/manha1.png'
    window.document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde!
    img.src = 'assets/tarde1.png'
    window.document.body.style.background = '#b9846f'
  } else {
    //Boa noite!
    img.src = 'assets/noite1.png'
    window.document.body.style.background = '#4b85b2'
  }
}
