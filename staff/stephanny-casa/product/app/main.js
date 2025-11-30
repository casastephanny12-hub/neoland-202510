//landing

const landingView = document.createElement('div') //creacion del div

const landingTitle = document.createElement('h1')
landingTitle.textContent = 'MyPet'

landingView.appendChild(landingTitle)

const landingWelcome = document.createElement('p')
landingWelcome.textContent = 'Welcome!'
landingView.appendChild(landingWelcome)

const landingAccess = document.createElement('p')

//inicio de ssion
const landingLoginLink = document.createElement('a')
landingLoginLink.textContent = 'Login'
landingLoginLink.href = ''
landingAccess.appendChild(landingLoginLink)

//nodo
const landingOrText = document.createTextNode(' or ')
landingAccess.appendChild(landingOrText)

//registro

const landingRegisterLink = document.createElement('a')
landingRegisterLink.textContent = 'Register'
landingRegisterLink.href = ''
landingAccess.appendChild(landingRegisterLink)

//lo colocamos en el landingview

landingView.appendChild(landingAccess)

document.body.appendChild(landingView)

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

//register

const registerView = document.createElement('div')
registerView.style.display = 'none'

const registerTitle = document.createElement('h1')
registerTitle.textContent = 'MyPet'
registerView.appendChild(registerTitle)

const registerSubtitle = document.createElement('h2')
registerSubtitle.textContent = 'Register'
registerView.appendChild(registerSubtitle)

const registerForm = document.createElement('form')

const registerNameLabel = document.createElement('label')
registerNameLabel.textContent = 'Name'
registerForm.appendChild(registerNameLabel)
const registerNameInput = document.createElement('input')
registerForm.appendChild(registerNameInput)

const registerEmailLabel = document.createElement('label')
registerEmailLabel.textContent = 'Email'
registerForm.appendChild(registerEmailLabel)
const registerEmailInput = document.createElement('input')
registerForm.appendChild(registerEmailInput)

const registerUsernameLabel = document.createElement('label')
registerUsernameLabel.textContent = 'Username'
registerForm.appendChild(registerUsernameLabel)
const registerUsernameInput = document.createElement('input')
registerForm.appendChild(registerUsernameInput)

const registerPasswordLabel = document.createElement('label')
registerPasswordLabel.textContent = 'Password'
registerForm.appendChild(registerPasswordLabel)
const registerPasswordInput = document.createElement('input')
registerForm.appendChild(registerPasswordInput)


const registerPasswordRepeatLabel = document.createElement('label')
registerPasswordRepeatLabel.textContent = 'Password Repeat'
registerForm.appendChild(registerPasswordRepeatLabel)
const registerPasswordRepeatInput = document.createElement('input')
registerForm.appendChild(registerPasswordRepeatInput)

const registerSubmitButton = document.createElement('button')
registerSubmitButton.textContent = 'Register'
registerForm.appendChild(registerSubmitButton)
registerView.appendChild(registerForm)

registerForm.addEventListener('submit', function (event) {

    event.preventDefault()

    const name = registerNameInput.value
    const email = registerEmailInput.value
    const username = registerUsernameInput.value
    const password = registerPasswordInput.value
    const passwordRepeat = registerPasswordRepeatInput.value

    try {
        logic.registerUser(name, email, username, password, passwordRepeat)

        registerForm.reset() // permite se borren los datos al ser registrado.
        registerFeedBack.textContent = '' // borra los datos del parrafo donde aparece reflejado los errores

        registerView.style.display = 'none'
        loginView.style.display = ''

    } catch (error) {
        registerFeedBack.textContent = error.message
    }
})

const registerLoginLink = document.createElement('a')
registerLoginLink.textContent = 'Login'
registerLoginLink.href = ''
registerView.appendChild(registerLoginLink)

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = ''
})


const registerFeedBack = document.createElement('p') // aqui mostrara el error capturado
registerView.appendChild(registerFeedBack)

document.body.appendChild(registerView)

//login

const loginView = document.createElement('div')
loginView.style.display = 'none'

const loginTitle = document.createElement('h1')
loginTitle.textContent = 'MyPet'
loginView.appendChild(loginTitle)

const loginSubtitle = document.createElement('h2')
loginSubtitle.textContent = 'Login'
loginView.appendChild(loginSubtitle)

const loginForm = document.createElement('form')

const loginUsernameLabel = document.createElement('label')
loginUsernameLabel.textContent = 'Username'
loginForm.appendChild(loginUsernameLabel)
const loginUsernameInput = document.createElement('input')
loginForm.appendChild(loginUsernameInput)

const loginPasswordLabel = document.createElement('label')
loginPasswordLabel.textContent = 'Password'
loginForm.appendChild(loginPasswordLabel)
const loginPasswordInput = document.createElement('input')
loginForm.appendChild(loginPasswordInput)

const loginSubmitButton = document.createElement('button')
loginSubmitButton.textContent = 'Login'
loginForm.appendChild(loginSubmitButton)
loginView.appendChild(loginForm)

loginForm.addEventListener('submit', function (event) {

    event.preventDefault()

    const username = loginUsernameInput.value
    const password = loginPasswordInput.value


    try {
        logic.loginUser(username, password)

        loginForm.reset()
        loginFeedBack.textContent = ''

        loginView.style.display = 'none'
        homeView.style.display = ''
    } catch (error) {
        loginFeedBack.textContent = error.message
    }

})

const loginRegisterLink = document.createElement('a')
loginRegisterLink.textContent = 'Register'
loginRegisterLink.href = ''
loginView.appendChild(loginRegisterLink)

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = ''
})

const loginFeedBack = document.createElement('p')
loginView.appendChild(loginFeedBack)

document.body.appendChild(loginView)

// home

const homeView = document.createElement('div')
homeView.style.display = 'none'

const homeTitle = document.createElement('h1')
homeTitle.textContent = 'MyPet'
homeView.appendChild(homeTitle)

const homeSubtitle = document.createElement('h2')
homeSubtitle.textContent = 'Welcome Home!'
homeView.appendChild(homeSubtitle)

const logoutButton = document.createElement('button') // boton de salida al estar en la home view al logearte
logoutButton.textContent = 'Logout' // agregamos texto que pulsaremos
homeView.appendChild(logoutButton) // añadimos en la homeview el boton 

logoutButton.addEventListener('click', function (event) {   //hacemos la funcion de event listener que al clickear salgamos de la homeview y nos redirigamos a la pagina de login
    event.preventDefault() // permite que la pagina se mantenga aqui

    homeView.style.display = 'none' //desactivamos la homeview 
    loginView.style.display = '' // activamos la loginview
})

document.body.appendChild(homeView) // añadimos al document body para que sea visible.
