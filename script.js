function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    const alt = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/assets/avatar-light.png')
        alt.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos, camisa preta e casaco, sem barba e fundo degrade de roxo e azul.')
    }
    else{
       img.setAttribute('src', './assets/assets/avatar.png') 
       alt.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.')
    }
}