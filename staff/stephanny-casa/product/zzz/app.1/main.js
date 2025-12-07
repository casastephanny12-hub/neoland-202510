//body

document.body.className = 'p-8 bg-amber-100 border border-5 border-orange-400 h-screen'

//landing

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

//inicio de ssion
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
registerTitle.className = 'font-bold text-4xl my-4'
registerView.appendChild(registerTitle)

const registerSubtitle = document.createElement('h2')
registerSubtitle.textContent = 'Register'
registerSubtitle.className = 'italic my-4'
registerView.appendChild(registerSubtitle)

const registerForm = document.createElement('form')
registerForm.className = 'flex flex-col'

const registerNameLabel = document.createElement('label')
registerNameLabel.textContent = 'Name'
registerNameLabel.htmlFor = 'name'
registerForm.appendChild(registerNameLabel)
const registerNameInput = document.createElement('input')
registerNameInput.id = 'name'
registerNameInput.type = 'text'
registerNameInput.className = 'border-2 boder-solid border-black rounded-lg p-1'
registerForm.appendChild(registerNameInput)

const registerEmailLabel = document.createElement('label')
registerEmailLabel.textContent = 'Email'
registerEmailLabel.htmlFor = 'email'
registerForm.appendChild(registerEmailLabel)
const registerEmailInput = document.createElement('input')
registerEmailInput.id = 'email'
registerEmailInput.type = 'email'
registerEmailInput.className = 'border-2 boder-solid border-black rounded-lg p-1'
registerForm.appendChild(registerEmailInput)

const registerUsernameLabel = document.createElement('label')
registerUsernameLabel.textContent = 'Username'
registerUsernameLabel.htmlFor = 'username'
registerForm.appendChild(registerUsernameLabel)
const registerUsernameInput = document.createElement('input')
registerUsernameInput.id = 'username'
registerUsernameInput.type = 'text'
registerUsernameInput.className = 'border-2 boder-solid border-black rounded-lg p-1'
registerForm.appendChild(registerUsernameInput)

const registerPasswordLabel = document.createElement('label')
registerPasswordLabel.htmlFor = 'password'
registerPasswordLabel.textContent = 'Password'
registerForm.appendChild(registerPasswordLabel)
const registerPasswordInput = document.createElement('input')
registerPasswordInput.id = 'password'
registerPasswordInput.type = 'password'
registerPasswordInput.className = 'border-2 boder-solid border-black rounded-lg p-1'
registerForm.appendChild(registerPasswordInput)

const registerShowPasswordButton = document.createElement('button')
registerShowPasswordButton.textContent = 'Show'
registerShowPasswordButton.type = 'button'
registerShowPasswordButton.className = 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end'
registerForm.appendChild(registerShowPasswordButton)

registerShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (registerPasswordInput.type === 'password') {
        registerPasswordInput.type = 'text'
        registerShowPasswordButton.textContent = 'Hide'
        registerShowPasswordButton.className = 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end'
    } else {
        registerPasswordInput.type = 'password'
        registerShowPasswordButton.textContent = 'Show'
        registerShowPasswordButton.className = 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end'
    }
})

const registerPasswordRepeatLabel = document.createElement('label')
registerPasswordRepeatLabel.textContent = 'Password Repeat'
registerPasswordRepeatLabel.htmlFor = 'passwordRepeat'
registerForm.appendChild(registerPasswordRepeatLabel)
const registerPasswordRepeatInput = document.createElement('input')
registerPasswordRepeatInput.id = 'passwordRepeat'
registerPasswordRepeatInput.type = 'password'
registerPasswordRepeatInput.className = 'border-2 boder-solid border-black rounded-lg p-1'
registerForm.appendChild(registerPasswordRepeatInput)

const registerShowPasswordRepeatButton = document.createElement('button')
registerShowPasswordRepeatButton.textContent = 'Show'
registerShowPasswordRepeatButton.type = 'button'
registerShowPasswordRepeatButton.className = 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end'
registerForm.appendChild(registerShowPasswordRepeatButton)

registerShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (registerPasswordRepeatInput.type === 'password') {
        registerPasswordRepeatInput.type = 'text'
        registerShowPasswordRepeatButton.textContent = 'Hide'
        registerShowPasswordButton.className = 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end'
    } else {
        registerPasswordRepeatInput.type = 'password'
        registerShowPasswordRepeatButton.textContent = 'Show'
        registerShowPasswordRepeatButton.className = 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end'
    }
})

const registerSubmitButton = document.createElement('button')
registerSubmitButton.textContent = 'Register'
registerSubmitButton.type = 'submit'
registerSubmitButton.className = 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center'
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
registerLoginLink.className = 'underline decoration-orange-500'
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
loginTitle.className = 'font-bold text-4xl my-4'
loginView.appendChild(loginTitle)

const loginSubtitle = document.createElement('h2')
loginSubtitle.textContent = 'Login'
loginSubtitle.className = 'italic my-4'
loginView.appendChild(loginSubtitle)

const loginForm = document.createElement('form')
loginForm.className = 'flex flex-col'

const loginUsernameLabel = document.createElement('label')
loginUsernameLabel.textContent = 'Username'
loginUsernameLabel.htmlFor = 'username'
loginForm.appendChild(loginUsernameLabel)
const loginUsernameInput = document.createElement('input')
loginUsernameInput.id = 'username'
loginUsernameInput.type = 'text'
loginUsernameInput.className = 'border-2 boder-solid border-black rounded-lg p-1'
loginForm.appendChild(loginUsernameInput)

const loginPasswordLabel = document.createElement('label')
loginPasswordLabel.textContent = 'Password'
loginPasswordLabel.htmlFor = 'password'
loginForm.appendChild(loginPasswordLabel)
const loginPasswordInput = document.createElement('input')
loginPasswordInput.id = 'password'
loginPasswordInput.type = 'password'
loginPasswordInput.className = 'border-2 boder-solid border-black rounded-lg p-1'
loginForm.appendChild(loginPasswordInput)

const loginShowPasswordButton = document.createElement('button')
loginShowPasswordButton.textContent = 'Show'
loginShowPasswordButton.type = 'button'
loginShowPasswordButton.className = 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end'
loginForm.appendChild(loginShowPasswordButton)

loginShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (loginPasswordInput.type === 'password') {
        loginPasswordInput.type = 'text'
        loginShowPasswordButton.textContent = 'Hide'
        loginShowPasswordButton.className = 'border-3 rounded-sm border-solid border-orange-500 self-end'
    } else {
        loginPasswordInput.type = 'password'
        loginShowPasswordButton.textContent = 'Show'
        loginShowPasswordButton.className = 'border-3 rounded-sm border-solid border-orange-500 self-end'
    }
})

const loginSubmitButton = document.createElement('button')
loginSubmitButton.textContent = 'Login'
loginSubmitButton.className = 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center'
loginSubmitButton.type = 'submit'
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
loginRegisterLink.className = 'underline decoration-orange-500'
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

    homeView.style.display = 'none' //desactivamos la homeview 
    loginView.style.display = '' // activamos la loginview
})

document.body.appendChild(homeView) // añadimos al document body para que sea visible.

// add pet

const addPetView = document.createElement('div')
addPetView.style.display = 'none'

const addPetTitle = document.createElement('h1')
addPetTitle.textContent = 'MyPet'
addPetTitle.className = 'font-bold italic text-4xl'
addPetView.appendChild(addPetTitle)

const addPetTopPanel = document.createElement('div')
addPetTopPanel.className = 'flex justify-between'
addPetView.appendChild(addPetTopPanel)

const addPetSubtitle = document.createElement('h2')
addPetSubtitle.textContent = 'Add Pet'
addPetSubtitle.className = 'text-xl italic my-4'
addPetTopPanel.appendChild(addPetSubtitle)

const addPetBackLink = document.createElement('a')
addPetBackLink.textContent = '< Back'
addPetBackLink.href = ''
addPetBackLink.className = 'bg-orange-300 rounded-sm border-2 border-black p-1 my-6 self-end'
addPetTopPanel.appendChild(addPetBackLink)

addPetBackLink.addEventListener('click', function (event) {
    event.preventDefault()

    addPetView.style.display = 'none'
    homeView.style.display = ''
})

const addPetForm = document.createElement('form')
addPetForm.className = 'flex flex-col'

const addPetNameLabel = document.createElement('label')
addPetNameLabel.textContent = 'Name'
addPetNameLabel.htmlFor = 'name'
addPetForm.appendChild(addPetNameLabel)
const addPetNameInput = document.createElement('input')
addPetNameInput.id = 'name'
addPetNameInput.type = 'text'
addPetNameInput.className = 'border-2 boder-solid border-black rounded-lg p-1'
addPetForm.appendChild(addPetNameInput)

const addPetBirthdateLabel = document.createElement('label')
addPetBirthdateLabel.textContent = 'Date of Birth'
addPetBirthdateLabel.htmlFor = 'date'
addPetForm.appendChild(addPetBirthdateLabel)

const addPetBirthdateInput = document.createElement('input')
addPetBirthdateInput.id = 'date'
addPetBirthdateInput.type = 'date'
addPetBirthdateInput.className = 'border-2 boder-solid border-black rounded-lg p-1'
addPetForm.appendChild(addPetBirthdateInput)

const addPetWeightLabel = document.createElement('label')
addPetWeightLabel.textContent = 'Weight (kg)'
addPetWeightLabel.htmlFor = 'weight'
addPetForm.appendChild(addPetWeightLabel)

const addPetWeightInput = document.createElement('input')
addPetWeightInput.id = 'weight'
addPetWeightInput.type = 'number'
addPetWeightInput.step = '0.01'
addPetWeightInput.className = 'border-2 boder-solid border-black rounded-lg p-1'
addPetForm.appendChild(addPetWeightInput)

const addPetImageLabel = document.createElement('label')
addPetImageLabel.textContent = 'Image'
addPetImageLabel.htmlFor = 'image'
addPetForm.appendChild(addPetImageLabel)

const addPetImageInput = document.createElement('input')
addPetImageInput.id = 'image'
addPetImageInput.type = 'url'
addPetImageInput.className = 'border-2 boder-solid border-black rounded-lg p-1'
addPetForm.appendChild(addPetImageInput)

const addPetSubmitButton = document.createElement('button')
addPetSubmitButton.textContent = 'Add Pet'
addPetSubmitButton.type = 'submit'
addPetSubmitButton.className = 'bg-orange-300 rounded-sm border-2 border-black p-1 my-6 self-center'
addPetForm.appendChild(addPetSubmitButton)

addPetView.appendChild(addPetForm)

addPetForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = addPetNameInput.value
    const birthdate = addPetBirthdateInput.value
    const weight = parseFloat(addPetWeightInput.value)
    const image = addPetImageInput.value

    try {
        logic.addPet(name, birthdate, weight, image)

        addPetForm.reset()
        addPetFeedback.textContent = ''

        addPetView.style.display = 'none'
        homeView.style.display = ''
    } catch (error) {
        addPetFeedback.textContent = error.message
    }


})

const addPetFeedback = document.createElement('p')
addPetView.appendChild(addPetFeedback)

document.body.appendChild(addPetView)