function carregar() {
    let msg = window.document.getElementById("msg")
    let img = window.document.getElementById("imagem")
    let template = window.document.getElementById("template")
    let data = new Date()
    let hora = data.getHours() 
    
        
    if(hora >= 5 && hora <= 11) {
        msg.innerHTML += `Bom Dia! agora são <strong>${hora} horas</strong>, é hora de tomar o Café da manhã`
        img.scr = 'css/cafe-manha.png'
        document.body.style.background = '#04718c'
        template.style.background = '#1987a2'
        
    }else if (hora >= 12 && hora < 14) {
        msg.innerHTML += `Boa Tarde! agora são <strong>${hora} horas</strong>, é hora de Almoçar`
        img.src = 'css/almoco.png'
        document.body.style.background = '#602a16'
        template.style.background = '#944b30'

    }else if(hora >= 14 && hora <= 18){
        msg.innerHTML += `Boa Tarde! agora são <strong>${hora} horas</strong>, é hora de tomar o Café da tarde`
        img.src = 'css/cafe-tarde.png'
        document.body.style.background = '#7c624b'
        template.style.background = '#88715c'

    }else if (hora > 18 && hora <= 23) {
        msg.innerHTML += `Boa Noite! agora são <strong>${hora} horas</strong>, é hora de Jantar`
        img.src = 'css/jantar.png'
        document.body.style.background = '#5e4871'
        template.style.background = '#756386'

    }else {    
        msg.innerHTML += `Olá, Boa Madrugada! agora são <strong>${hora} horas</strong> , é hora do lanche da Madrugada`
        img.src = 'css/lanche-madrugada.png'
        document.body.style.background = '#300d4e'
        template.style.background = '#44245f'
    }
}