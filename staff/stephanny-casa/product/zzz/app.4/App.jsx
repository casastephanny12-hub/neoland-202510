const { useState } = React

function App() {

    console.log('App -> call')

    const [view, setView] = useState('landing')


    const handleGoToLogin = () => {
        setView('login')
    }

    const handleRegisterClick = () => {

        setView('register')
    }

    const handleLogin = () => {
        setView('home')
    }

    const handleRegister = () => {
        setView('login')
    }

    const handleLogout = () => {
        setView('landing')
    }

    const handleAddPetButton = () => {
        setView('add-pet')
    }

    const handleBackClick = () => {
        setView('home')
    }

    const handleAddPet = () => {
        setView('home')
    }


    console.log('App -> render')

    if (view === 'landing')
        return <Landing onGoToLogin={handleGoToLogin} onRegisterClick={handleRegisterClick} />

    if (view === 'login')
        return < Login onLogin={handleLogin} onRegisterClick={handleRegisterClick} />

    if (view === 'register')
        return < Register onRegister={handleRegister} onLoginClick={handleLoginClick} />

    if (view === 'home') {
        return < Home onAddPetClick={handleAddPetButton} onLogout={handleLogout} />
    }

    if (view === 'add-pet')
        return < AddPet onBackClick={handleBackClick} onAddPet={handleAddPet} />
}