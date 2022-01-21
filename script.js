function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById("txtano")
    let res = window.document.getElementById("res")


    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else {
        let fsex = window.document.querySelectorAll('input[type="radio"]')
        let idade = ano - Number(fano.value)
        let genero =  ''
        let img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                genero = 'Criança'
                img.setAttribute('src','crianca-homem.png')
            }else if (idade >= 12 && idade < 21){
                genero = 'Jovem'
                img.setAttribute('src','jovem-homem.png')
            }else if (idade >= 21 && idade < 50) {
                genero = 'Adulto'
                img.setAttribute('src','adulto-homem.png')
            }else {
                genero = 'Idoso'
                img.setAttribute('src','idoso.png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                genero = 'Criança'
                img.setAttribute('src','crianca-mulher.png')
            }else if (idade >= 12 && idade < 21){
                genero = 'Jovem'
                img.setAttribute('src','jovem-mulher.png')
            }else if (idade >= 21 && idade < 50) {
                genero = 'Adulta'
                img.setAttribute('src','adulto-mulher.png')
            }else {
                genero = 'Idosa'
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        res.style.padding = '10px'
    }
}