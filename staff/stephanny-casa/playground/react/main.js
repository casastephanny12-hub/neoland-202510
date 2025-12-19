const rootElement = document.getElementById('root') //referencia del objeto index

const root = ReactDOM.createRoot(rootElement) //pasamos a DOM

 //landing 

 const landingTitle = React.createElement('h1', null, 'MyPet')

 const landingWelcome = React.createElement('p', null, 'Welcome!')
 
 const landingLoginLink = React.createElement('a', { href: '' }, 'Login')

 const landingRegisterLink = React.createElement('a', { href: ''}, 'Register')
 const landingNavigation = React.createElement('nav', null, [landingLoginLink, ' or ', landingRegisterLink])

 const landingView = React.createElement('div', null, [landingTitle, landingWelcome, landingNavigation])

 root.render(landingView)