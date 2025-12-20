const rootElement = document.getElementById('root') //referencia del objeto index

const root = ReactDOM.createRoot(rootElement) //pasamos a DOM

//landing 

const landingTitle = React.createElement('h1', { children: 'MyPet' })

const landingWelcome = React.createElement('p', { children: 'Welcome!' })

const landingLoginLink = React.createElement('a', { href: '', children: 'Login'})

const landingRegisterLink = React.createElement('a', { href: '', children: 'Register'})

const landingNavigation = React.createElement('nav', null, [landingLoginLink, ' or ', landingRegisterLink])

const landingView = React.createElement('div', null, [landingTitle, landingWelcome, landingNavigation])

root.render(landingView)