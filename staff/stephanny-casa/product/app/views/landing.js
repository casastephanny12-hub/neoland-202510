const landingView = document.createElement('div') //creacion del div
// landingView.style.display = 'none' // creamos por si queremos apagar la pantalla y encender otra mientras vamos retocando codigo

const landingTitle = document.createElement('h1')
landingTitle.textContent = 'MyPet'
landingTitle.className = 'font-bold italic text-7xl'
landingView.appendChild(landingTitle)

const landingWelcome = document.createElement('p')
landingWelcome.textContent = 'Welcome!'
landingWelcome.className = 'text-4xl my-4'
landingView.appendChild(landingWelcome)

const landingAccess = document.createElement('p')

//inicio de sesion
const landingLoginLink = document.createElement('a')
landingLoginLink.textContent = 'Login'
landingLoginLink.href = ''
landingLoginLink.className = 'bg-orange-300 rounded-sm border-2 border-black p-1'
landingAccess.appendChild(landingLoginLink)

//nodo
const landingOrText = document.createTextNode(' or ')
landingAccess.appendChild(landingOrText)

//registro

const landingRegisterLink = document.createElement('a')
landingRegisterLink.textContent = 'Register'
landingRegisterLink.href = ''
landingRegisterLink.className = ' bg-orange-300 rounded-sm border-2 border-black p-1'
landingAccess.appendChild(landingRegisterLink)

//lo colocamos en el landingview

landingView.appendChild(landingAccess)

landingLoginLink.addEventListener('click', function (event) {
    event.preventDefault()  //evita que se rediriga a la pagina principal (no recarga)
    landingView.style.display = 'none' // apaga la pagina principal
    loginView.style.display = '' // activa la pagina de login con su formulario
})

landingRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()  //evita que se rediriga a la pagina principal (no recarga)
    landingView.style.display = 'none' // apaga la pagina principal
    registerView.style.display = '' // activa la pagina de Register con su formulario
})

document.body.appendChild(landingView)