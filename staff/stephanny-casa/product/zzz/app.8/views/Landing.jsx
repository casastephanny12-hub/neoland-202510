const { useState } = React

function Landing({ onGoToLogin, onGoToRegister }) {
    console.log('Landing -> call')

    const handleLoginClick = event => {
        event.preventDefault()

        onGoToLogin()
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onGoToRegister()
    }

    console.log('Landing -> render')

    return <div className="p-4">
        <h1 className="font-bold text-4xl my-4">MyPet</h1>
        <p className="text-4xl my-4">Welcome!</p>
        <nav>
            <Anchor onClick={handleLoginClick}>Login</Anchor> or <Anchor onClick={handleRegisterClick}>Register</Anchor>
        </nav>
    </div>
}