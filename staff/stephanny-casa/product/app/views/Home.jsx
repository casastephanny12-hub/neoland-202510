const { useState } = React

function Home({ onGoToAddPet, onGoToLanding }) {

    console.log('Home -> call')

    const [message, setMessage] = useState('')

    const handleAddPetClick = event => {
        event.preventDefault()

        onGoToAddPet()
    }

    const handleLogoutClick = event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            setMessage('')

            onGoToLanding()
        } catch (error) {
            setMessage('Sorry, try it later!')
        }
    }


    console.log('Home -> render')

    return <div className="p-4">

        <h1 className="font-bold text-4xl my-4">MyPet</h1>

        <h2 className="italic my-4">Welcome Home!</h2>

        <div className="flex justify-between">
            <Button className="self-center" type="button" onClick={handleAddPetClick}>+ Pet</Button>
            <Button className="self-center" type="button" onClick={handleLogoutClick}>Logout</Button>
        </div>

        <PetList />

        <p>{message}</p>
    </div>
}