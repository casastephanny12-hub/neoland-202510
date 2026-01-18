function Register({ onRegister, onLoginClick }) {

    console.log('Regisrer -> call')
    console.log('Register -> render')

    const [message, setMessage] = useState('')
    const [passwordType, setPasswordType] = useState('password')
    const [passwordRepeatType, setPasswordRepeatType] = useState('password')

    const handleRegisterButton = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value
        const passwordRepeat = form.passwordRepeat.value

        try {
            logic.registerUser(name, email, username, password, passwordRepeat)

            form.reset()

 
            setMessage('')
            setPasswordType('password')
            setPasswordRepeatType('password')

            onRegister()
        } catch (error) {
            setMessage(error.message)
        }
    }

    const handleTogglePasswordClick = event => {
        event.preventDefault()

        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }

    const handleTogglePasswordRepeatClick = event => {
        event.preventDefault()

        setPasswordRepeatType(passwordRepeatType === 'password' ? 'text' : 'password')
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    return <div className="p-4">
        <h1 className="font-bold text-4xl my-4">MyPet</h1>

        <h2 className="italic my-4">Register</h2>

        <form className="flex flex-col" onSubmit={handleRegisterButton}>

            <label for="name">Name</label>
            <input id="name" name="name" autoComplete="name"
                type="text" className="border-2 boder-solid border-black rounded-lg p-1" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" autoComplete="email" type="email" className="border-2 boder-solid border-black rounded-lg p-1" />

            <label htmlFor="username">Username</label>
            <input id="username" name="username"
                autoComplete="username" type="text" className="border-2 boder-solid border-black rounded-lg p-1" />

            <label htmlFor="password">Password</label>
            <input id="password" name="password"
                autoComplete="off" type={passwordType} className={passwordType === 'password' ? "border-2 boder-solid border-black rounded-lg p-1" : "border-2 boder-solid border-black rounded-lg p-1 bg-[gray]"} />
            <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end mt-2" type="button" onClick={handleTogglePasswordClick}>{passwordType === 'password' ? 'Show' : 'Hide'}</button>

            <label htmlFor="passwordRepeat">Password Repeat</label>
            <input id="passwordRepeat" autoComplete="off" name="passwordRepeat"
                type={passwordRepeatType} className={passwordRepeatType === 'password' ? "border-2 boder-solid border-black rounded-lg p-1" : "border-2 boder-solid border-black rounded-lg p-1 bg-[gray]"} />
            <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end mt-2" type="button" onClick={handleTogglePasswordRepeatClick}>{passwordRepeatType === 'password' ? 'Show' : 'Hide'}</button>

            <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center" type="submit">Register</button>

        </form>

        <a className="underline decoration-orange-500" onClick={handleLoginClick}>Login</a>

        <p>{message}</p>
    </div>

}