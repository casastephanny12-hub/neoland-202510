const { useState, useEffect } = React

function Home({ onGoToAddPet, onGoToLanding }) {

    console.log('Home -> call')

    const [message, setMessage] = useState('')
    const [pets, setPets] = useState([])
    const [petId, setPetId] = useState(null)

    useEffect(() => {
        console.log('Home -> useEffect')
        try {
            const pets = logic.getPets()

            setPets(pets)
        } catch (error) {
            setMessage(error.message)
        }
    }, [])

    const handleDeletePetClick = event => {
        event.preventDefault()

        const button = event.target

        const petId = button.id

        setPetId(petId)
    }

    const handleAddPetButton = event => {
        event.preventDefault()

        onGoToAddPet()
    }

    const handleLogoutButton = event => {
        event.preventDefault()

        try {
            logic.logOutUser()

            setMessage('')
            setPets([])

            onGoToLanding()
        } catch (error) {
            setMessage('Sorry, try it later!')
        }
    }

    const handleCancelDeletePetClick = event => {
        event.preventDefault()

        setPetId(null)
    }

    const handleConfirmDeletePetClick = event => {
        event.preventDefault()

        try {
            logic.deletePet(petId)

            const pets = logic.getPets()

            setPetId(null)
            setPets(pets)
        } catch (error) {
            setMessage(error.message)
        }
    }

    console.log('Home -> render')

    const petItems = []

    for (const pet of pets) {
        const petItem = <li className="flex items-center border-2 border-orange-500 p-2 justify-between">
            <div className="flex items-center gap-4 w-full">
                <img src={pet.image}
                    className="rounded-full w-30 h-30 object-cover" />

                <p>{pet.name}</p>
            </div>

            <button id={pet.id} className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center justify-self-end" onClick={handleDeletePetClick}>🗑️</button>
        </li>

        petItems.push(petItem)
    }

    return <div className="p-4">

        <h1 className="font-bold text-4xl my-4">MyPet</h1>

        <h2 className="italic my-4">Welcome Home!</h2>

        <div className="flex justify-between">
            <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center" type="button" onClick={handleAddPetButton}>+ Pet</button>
            <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center" type="button" onClick={handleLogoutButton}>Logout</button>
        </div>

        <ul className="flex flex-col gap-2 mt-2">
            {petItems}
        </ul>

        {petId && <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center">

            <div className="bg-white border-black border-2 p-2">
                <p className="text-center">Delete Pet?</p>
                <div className="flex justify-center gap-2">
                    <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center" onClick={handleCancelDeletePetClick}>❎</button>
                    <button className="border-3 rounded-sm border-solid border-orange-500 bg-orange-200 self-center" onClick={handleConfirmDeletePetClick}>✅</button>
                </div>
            </div>
        </div>}

        <p>{message}</p>
    </div>
}