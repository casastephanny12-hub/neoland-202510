const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(< App />)

const useState = React.useState

function App() {

    const [view, setView] = useState('landing')
    const [message, setMessage] = useState('')
    const [passwordType, setPasswordType] = useState('password')
    const [passwordRepeatType, setPasswordRepeatType] = useState('password')
    const [pets, setPets] = useState([])

    const loginFormRef = useRef()
    const registerFormRef = useRef()


    const handleLoginClick = event => {
        event.preventDefault()

        setView('login')
        setMessage('')
        setPasswordType('password')
        setPasswordRepeatType('password')

    }

    const handleRegisterClick = event => {
        event.preventDefault()

        setView('register')
        setMessage('')
        setPasswordType('password')
        setPasswordRepeatType('password')
    }

    const handleLoginButton = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {

            logic.loginUser(username, password)

            form.reset()

            const pets = logic.getPets()

            const newPets = []

            for (const pet of pets) {
                return newPets.push(pet)
            }

            setView('home')
            setMessage('')
            setPasswordType('password')
            setPasswordRepeatType('password')
            setPets(newPets)
        } catch (error) {
            setMessage(error.message)
        }
    }

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

            setView('login')
            setMessage('')
        } catch (error) {
            setMessage(message)
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

    const handleLogoutButton = event => {
        event.preventDefault()

        try {
            logic.logoutUser()
            setView('landing')
        } catch (error) {
            setMessage('Sorry, try it later!')
        }


    }

    const handleAddPetButton = event => {
        event.preventDefault()

        setView('add-pet')
    }


    const handleAddPetBackButton = event => {
        event.preventDefault()

        setView('home')
    }

    const handleAddPetFormButton = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const weight = Number(form.weight.value)
        const image = form.image.value

        try {
            logic.addPet(name, birthdate, weight, image)

            form.reset()

            setView('home')
        } catch (error) {
            setMessage(error.message)
        }

    }

    const handleDeleteButton = event => {
        event.preventDefault()
    }


    //landing
    if (view === 'landing')
        return <div className="p-4">
            <h1 className="font-bold text-4xl my-4">MyPet</h1>
            <p className="text-4xl my-4">Welcome!</p>
            <nav>
                <a className="bg-orange-300 rounded-sm border-2 border-black p-1" onClick={handleLoginClick}>Login</a> or <a className=" bg-orange-300 rounded-sm border-2 border-black p-1" onClick={handleRegisterClick}>Register</a>
            </nav>
        </div>



    //login

    if (view === 'login')
        return <div className="p-4">
            <h1 className="font-bold text-4xl my-4">MyPet</h1>

            <h2 className="italic my-4">Login</h2>

            <form className="flex flex-col" onSubmit={handleLoginButton}>

                <label htmlFor="username">Username</label>
                <input id="username" type="text" className="border-2 boder-solid border-black rounded-lg p-1" />

                <label htmlFor="password">Password</label>
                <input id="password" type={passwordType} className={passwordType === 'password' ? "border-2 boder-solid border-black rounded-lg p-1" : "border-2 boder-solid border-black rounded-lg p-1 bg-[gray]"} />

                <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end mt-2" type="button" onClick={handleTogglePasswordClick}>{passwordType === 'password' ? 'Show' : 'Hide'}</button>

                <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center" type="submit">Login</button>

            </form>

            <a className="underline decoration-orange-500" onClick={handleRegisterClick}>Register</a>

            <p>{message}</p>
        </div>



    //register 

    if (view === 'register')
        return <div className="p-4">
            <h1 className="font-bold text-4xl my-4">MyPet</h1>

            <h2 className="italic my-4">Register</h2>

            <form className="flex flex-col" onSubmit={handleRegisterButton}>

                <label for="name">Name</label>
                <input id="name" type="text" className="border-2 boder-solid border-black rounded-lg p-1" />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" className="border-2 boder-solid border-black rounded-lg p-1" />

                <label htmlFor="username">Username</label>
                <input id="username" type="text" className="border-2 boder-solid border-black rounded-lg p-1" />

                <label htmlFor="password">Password</label>
                <input id="password" type={passwordType} className={passwordType === 'password' ? "border-2 boder-solid border-black rounded-lg p-1" : "border-2 boder-solid border-black rounded-lg p-1 bg-[gray]"} />
                <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end mt-2" type="button" onClick={handleTogglePasswordClick}>{passwordType === 'password' ? 'Show' : 'Hide'}</button>

                <label htmlFor="passwordRepeat">Password Repeat</label>
                <input id="passwordRepeat" type={passwordRepeatType} className={passwordRepeatType === 'password' ? "border-2 boder-solid border-black rounded-lg p-1" : "border-2 boder-solid border-black rounded-lg p-1 bg-[gray]"} />
                <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-end mt-2" type="button" onClick={handleTogglePasswordRepeatClick}>{passwordRepeatType === 'password' ? 'Show' : 'Hide'}</button>

                <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center" type="submit">Register</button>

            </form>

            <a className="underline decoration-orange-500" onClick={handleLoginClick}>Login</a>

            <p>{message}</p>
        </div>



    //Home

    if (view === 'home'){
        const petItems = []

    for (const pet of pets) {
        const petItem = <li className="flex items-center border-2 border-orange-500 p-2 justify-between">
            <div className="flex items-center gap-4 w-full">
                <img src={pet.image} 
                className="rounded-full w-30 h-30 object-cover"/>

                <p>{pet.name}</p>
            </div>
            <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center justify-self-end" onClick={handleDeleteButton}>🗑️</button>
        </li>

        petItems.push(petItem)
    }

    return <div class="p-4">

        <h1 className="font-bold text-4xl my-4">MyPet</h1>

        <h2 className="italic my-4">Welcome Home!</h2>

        <div className="flex justify-between">
            <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center" type="button" onClick={handleAddPetButton}>+ Pet</button>
            <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center" type="button" onClick={handleLogoutButton}>Logout</button>
        </div>

        <ul className="flex flex-col gap-2 mt-2">
            {petItems}
        </ul>

        <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center" style={{ display: 'none' }}>

            <div className="bg-white border-black border-2 p-2">
                <p className="text-center">Delete Pet?</p>
                <div className="flex justify-center gap-2">
                    <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center">❎</button>
                    <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center">✅</button>
                </div>
            </div>
        </div>
        <p>{message}</p>
    </div>
    }


    //AddPet

    if (view === 'add-pet')
        return <div className="p-4">
            <h1 className="font-bold italic text-4xl">MyPet</h1>
            <div className="flex justify-between">

                <h2 className="text-xl italic my-4">Add Pet</h2>
                <a className="cursor-pointer bg-orange-300 rounded-sm border-2 border-black p-1 my-6 self-end" onClick={handleAddPetBackButton}>&lt; Back</a>

            </div>
            <form className="flex flex-col" onSubmit={handleAddPetFormButton}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" className="border-2 boder-solid border-black rounded-lg p-1" />

                <label htmlFor="date">Date of Birth</label>
                <input id="date" type="date" className="border-2 boder-solid border-black rounded-lg p-1" />

                <label htmlFor="weight">Weight (kg)</label>
                <input id="weight" type="number" step="0.01" className="border-2 boder-solid border-black rounded-lg p-1" />

                <label htmlFor="image">Image</label>
                <input id="image" type="url" className="border-2 boder-solid border-black rounded-lg p-1" />

                <button className="bg-orange-300 rounded-sm border-2 border-black p-1 my-6 self-center" type="submit">Add Pet</button>
            </form>
            <p>{message}</p>
        </div>

}