const landingView = createView () //creacion del div
// landingView.style.display = 'none' // creamos por si queremos apagar la pantalla y encender otra mientras vamos retocando codigo

const landingTitle = createTitle ()
setTextContent(landingTitle, 'MyPet')
addChild(landingView, landingTitle)

const landingWelcome = createParagraph()
setTextContent (landingWelcome, 'Welcome!')
setClass (landingWelcome, 'text-4xl my-4')
addChild (landingView, landingWelcome)

const landingNavigation = createNavigation ()

//inicio de sesion
const landingLoginLink = createLink()
setTextContent(landingLoginLink, 'Login')
setClass(landingLoginLink,'bg-orange-300 rounded-sm border-2 border-black p-1')
addChild(landingNavigation, landingLoginLink)

//nodo
const landingOrText = createTextNode(' or ')
addChild(landingNavigation, landingOrText)

//registro

const landingRegisterLink = createLink()
setTextContent(landingRegisterLink, 'Register')
setClass(landingRegisterLink,' bg-orange-300 rounded-sm border-2 border-black p-1')
addChild(landingNavigation, landingRegisterLink)

//lo colocamos en el landingview

addChild(landingView, landingNavigation)

landingLoginLink.addEventListener('click', function (event) {
    event.preventDefault()  //evita que se rediriga a la pagina principal (no recarga)
    hideView(landingView) // apaga la pagina principal
    showView(loginView) // activa la pagina de login con su formulario
})

landingRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()  //evita que se rediriga a la pagina principal (no recarga)
    hideView(landingView) // apaga la pagina principal
    showView(registerView) // activa la pagina de Register con su formulario
})

addChild(document.body, landingView)