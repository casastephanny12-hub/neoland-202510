const { useState, useEffect } = React

function PetList() {

    console.log('PetList -> call')

    const [message, setMessage] = useState('')
    const [pets, setPets] = useState([])
    const [petId, setPetId] = useState(null)

    useEffect(() => {
        console.log('PetList -> useEffect')
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

    console.log('PetList -> render')

    return <div>

        <ul className="flex flex-col gap-2 mt-2">
            {pets.map(pet => <li className="flex items-center border-2 border-orange-500 p-2 justify-between">
            <div className="flex items-center gap-4 w-full">
                <img src={pet.image}
                    className="rounded-full w-30 h-30 object-cover" />

                <p>{pet.name}</p>
            </div>

            <Button id={pet.id} className="justify-self-end" onClick={handleDeletePetClick}>🗑️</Button>
        </li>)}
        </ul>

        {petId && <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center">

                <div className="bg-white border-black border-2 p-2 flex justify-center items-center">
                    <p className="text-center">Delete Pet?</p>
                    <div className="flex justify-center gap-2">
                        <Button onClick={handleCancelDeletePetClick}>❎</Button>
                        <Button onClick={handleConfirmDeletePetClick}>✅</Button>

                    </div>
                </div>
            </div>}
        
        <p>{message}</p>

    </div>
}