const homeView = document.createElement('div')
homeView.style.display = 'none'

const homeTitle = document.createElement('h1')
homeTitle.textContent = 'MyPet'
homeTitle.className = 'font-bold text-4xl my-4'
homeView.appendChild(homeTitle)

const homeSubtitle = document.createElement('h2')
homeSubtitle.textContent = 'Welcome Home!'
homeSubtitle.className = 'italic text-2xl my-4'
homeView.appendChild(homeSubtitle)

const homeTopPanel = document.createElement('div')
homeTopPanel.className = 'flex justify-between'
homeView.appendChild(homeTopPanel)

const homeAddPetButton = document.createElement('button')
homeAddPetButton.textContent = '+ Pet'
homeAddPetButton.type = 'button'
homeAddPetButton.className = 'border-3 rounded-sm border-solid border-orange-500 my-4'
homeTopPanel.appendChild(homeAddPetButton)

homeAddPetButton.addEventListener('click', function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    addPetView.style.display = ''
})

const homeLogoutButton = document.createElement('button') // boton de salida al estar en la home view al logearte
homeLogoutButton.textContent = 'Logout' // agregamos texto que pulsaremos
homeLogoutButton.type = 'button'
homeLogoutButton.className = 'border-3 rounded-sm border-solid border-orange-500 my-4'
homeTopPanel.appendChild(homeLogoutButton) // añadimos en la homeview el boton 

homeLogoutButton.addEventListener('click', function (event) {   //hacemos la funcion de event listener que al clickear salgamos de la homeview y nos redirigamos a la pagina de login
    event.preventDefault() // permite que la pagina se mantenga aqui

    logic.logOutUser() // logica

    for (let i = homePetList.childNodes.length - 1; i >= 0 ; i--){
    const child = homePetList.childNodes[i]

    child.remove()

}
    homeView.style.display = 'none' //desactivamos la homeview 
    loginView.style.display = '' // activamos la loginview
})

const homePetList = document.createElement ('ul')
homeView.appendChild(homePetList)

document.body.appendChild(homeView) // añadimos al document body para que sea visible.