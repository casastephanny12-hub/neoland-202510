const { useState } = React

function Login({onGoToHome, onGoToRegister}) {
    console.log('Login -> call')

    const [message, setMessage] = useState('')
    const [passwordType, setPasswordType] = useState('password')

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {

            logic.loginUser(username, password)

            form.reset()

            setMessage('')
            setPasswordType('password')

            onGoToHome()
        } catch (error) {
            setMessage(error.message)
        }
    }

    const handleTogglePasswordClick = event => {
        event.preventDefault()

        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }

    const handleRegisterClick = event => {
        event.preventDefault()

         onGoToRegister()
    }

    console.log('Login -> render')

    return <div className="p-4">
        <h1 className="font-bold text-4xl my-4">MyPet</h1>

        <h2 className="italic my-4">Login</h2>

        <form className="flex flex-col" onSubmit={handleLoginSubmit}>

            <label htmlFor="username">Username</label>
            <input id="username" name="username" autoComplete="username" type="text" className="border-2 boder-solid border-black rounded-lg p-1" />

            <label htmlFor="password">Password</label>
            <input id="password" name="password"
                autoComplete="off" type={passwordType} className={passwordType === 'password' ? "border-2 boder-solid border-black rounded-lg p-1" : "border-2 boder-solid border-black rounded-lg p-1 bg-[gray]"} />

            <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end mt-2" type="button" onClick={handleTogglePasswordClick}>{passwordType === 'password' ? 'Show' : 'Hide'}</button>

            <Button className="self-center" type="submit">Login</Button>

        </form>

        <a className="underline decoration-orange-500" onClick={handleRegisterClick}>Register</a>

        <p>{message}</p>
    </div>

}