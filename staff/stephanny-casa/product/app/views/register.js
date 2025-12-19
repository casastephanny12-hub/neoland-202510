const registerView = createView ()
hideView (registerView)

const registerTitle = createTitle()
setTextContent(registerTitle, 'MyPet')
setClass(registerTitle, 'font-bold text-4xl my-4')
addChild(registerView, registerTitle)

const registerSubtitle = createTitle2()
setTextContent(registerSubtitle, 'Register')
setClass(registerSubtitle,'italic my-4')
addChild(registerView, registerSubtitle)

const registerForm = createForm()
setClass(registerForm, 'flex flex-col')

const registerNameLabel = createLabel()
setTextContent(registerNameLabel, 'Name')
setFor(registerNameLabel, 'name')
addChild(registerForm, registerNameLabel)

const registerNameInput = createInput()
setId(registerNameInput, 'name')
setType(registerNameInput, 'text')
setClass(registerNameInput, 'border-2 boder-solid border-black rounded-lg p-1')
addChild(registerForm, registerNameInput)

const registerEmailLabel = createLabel()
setTextContent(registerEmailLabel, 'Email')
setFor(registerEmailLabel, 'email')
addChild(registerForm, registerEmailLabel)

const registerEmailInput = createInput()
setId(registerEmailInput, 'email')
setType(registerEmailInput, 'email')
setClass(registerEmailInput, 'border-2 boder-solid border-black rounded-lg p-1')
addChild(registerForm, registerEmailInput)

const registerUsernameLabel = createLabel()
setTextContent(registerUsernameLabel, 'Username')
setFor(registerUsernameLabel, 'username')
addChild(registerForm, registerUsernameLabel)

const registerUsernameInput = createInput()
setId(registerUsernameInput, 'username')
setType(registerUsernameInput, 'text')
setClass(registerUsernameInput, 'border-2 boder-solid border-black rounded-lg p-1')
addChild(registerForm, registerUsernameInput)

const registerPasswordLabel = createLabel()
setFor(registerPasswordLabel, 'password')
setTextContent(registerPasswordLabel, 'Password')
addChild(registerForm, registerPasswordLabel)

const registerPasswordInput = createInput()
setId(registerPasswordInput, 'password')
setType(registerPasswordInput, 'password')
setClass(registerPasswordInput,'border-2 boder-solid border-black rounded-lg p-1')
addChild(registerForm,registerPasswordInput)

const registerShowPasswordButton = createButton()
setTextContent(registerShowPasswordButton, 'Show')
setType(registerShowPasswordButton, 'button')
setClass(registerShowPasswordButton, 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end')
addChild(registerForm, registerShowPasswordButton)

registerShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (getType(registerPasswordInput) === 'password') {
        setType(registerPasswordInput, 'text')
        setTextContent(registerShowPasswordButton, 'Hide')
        setClass(registerShowPasswordButton, 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end')
    } else {
        setType(registerPasswordInput, 'password')
        setTextContent(registerShowPasswordButton, 'Show')
        setClasss(registerShowPasswordButton, 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end')
    }
})

const registerPasswordRepeatLabel = createLabel()
setTextContent(registerPasswordRepeatLabel, 'Password Repeat')
setFor(registerPasswordRepeatLabel, 'passwordRepeat')
addChild(registerForm, registerPasswordRepeatLabel)

const registerPasswordRepeatInput = createInput()
setId(registerPasswordRepeatInput, 'passwordRepeat')
setType(registerPasswordRepeatInput, 'password')
setClass(registerPasswordRepeatInput, 'border-2 boder-solid border-black rounded-lg p-1')
addChild(registerForm, registerPasswordRepeatInput)

const registerShowPasswordRepeatButton = createButton()
setTextContent(registerShowPasswordRepeatButton, 'Show')
setType(registerShowPasswordRepeatButton, 'button')
setClass(registerShowPasswordRepeatButton, 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end')
addChild(registerForm, registerShowPasswordRepeatButton)

registerShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (getType(registerPasswordRepeatInput) === 'password') {
        setType(registerPasswordRepeatInput, 'text')
        setTextContent(registerShowPasswordRepeatButton, 'Hide')
        setClass(registerShowPasswordButton, 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end')
    } else {
        setType(registerPasswordRepeatInput, 'password')
        setTextContent(registerShowPasswordRepeatButton, 'Show')
        setClass(registerShowPasswordRepeatButton,'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end')
    }
})

const registerSubmitButton = createButton()
setTextContent(registerSubmitButton, 'Register')
setType(registerSubmitButton, 'submit')
setClass(registerSubmitButton, 'border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center')
addChild(registerForm, registerSubmitButton)
addChild(registerView, registerForm)

registerForm.addEventListener('submit', function (event) {

    event.preventDefault()

    const name = getValue(registerNameInput)
    const email = getValue(registerEmailInput)
    const username = getValue(registerUsernameInput)
    const password = getValue(registerPasswordInput)
    const passwordRepeat = getValue(registerPasswordRepeatInput)

    try {
        logic.registerUser(name, email, username, password, passwordRepeat)

        reset(registerForm) // permite se borren los datos al ser registrado.
        setTextContent(registerFeedBack, '') // borra los datos del parrafo donde aparece reflejado los errores

        hideView(registerView)
        showView(loginView)

    } catch (error) {
        setTextContent(registerFeedBack, error.message)
    }
})

const registerLoginLink = createLink()
setTextContent(registerLoginLink, 'Login')
setClass(registerLoginLink,  'underline decoration-orange-500')
addChild(registerView, registerLoginLink)

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView (registerView)
    showView (loginView)
})

const registerFeedBack = createParagraph() // aqui mostrara el error capturado
addChild(registerView, registerFeedBack)

addChild(document.body, registerView)