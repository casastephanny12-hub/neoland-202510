const { useState } = React

function Home({ onGoToAddPet, onGoToLanding, onGoToProfile }) {

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

    const handleProfileClick = event => {
        event.preventDefault()

        onGoToProfile()
    }


    console.log('Home -> render')

    return <div className="p-4">

        <h1 className="font-bold text-4xl my-4">MyPet</h1>

        <h2 className="italic my-4">Welcome Home!</h2>

        <div className="flex justify-between">
            <Anchor className="self-center" onClick={handleAddPetClick}>+ Pet</Anchor>

            <Anchor onClick={handleProfileClick}>🐻Profile</Anchor>

            <Button className="self-center" type="button" onClick={handleLogoutClick}>Logout</Button>
        </div>

        <PetList />

        <p>{message}</p>
    </div>
}