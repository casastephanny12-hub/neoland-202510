const { useState } = React

function AddPet({ onGoToHome }) {

    console.log('AddPet -> call')

    const [message, setMessage] = useState('')

    const handleAddPetBackClick = event => {
        event.preventDefault()

        onGoToHome()
    }

    const handleAddPeSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const weight = Number(form.weight.value)
        const image = form.image.value

        try {
            logic.addPet(name, birthdate, weight, image)

            form.reset()

            onGoToHome()
        } catch (error) {
            setMessage(error.message)
        }

    }

    console.log('AddPet -> render')

    return <div className="p-4">
        <h1 className="font-bold italic text-4xl">MyPet</h1>
        <div className="flex justify-between">

            <h2 className="text-xl italic my-4">Add Pet</h2>
            <a className="cursor-pointer bg-orange-300 rounded-sm border-2 border-black p-1 my-6 self-end" onClick={handleAddPetBackClick}>&lt; Back</a>

        </div>
        <form className="flex flex-col" onSubmit={handleAddPeSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" autoComplete="off" type="text" className="border-2 boder-solid border-black rounded-lg p-1" />

            <label htmlFor="date">Date of Birth</label>
            <input id="birthdate" name="birthdate" autoComplete="off" type="date" className="border-2 boder-solid border-black rounded-lg p-1" />

            <label htmlFor="weight">Weight (kg)</label>
            <input id="weight" name="weight" autoComplete="off" type="number" step="0.01" className="border-2 boder-solid border-black rounded-lg p-1" />

            <label htmlFor="image">Image</label>
            <input id="image" name="image" autoComplete="off" type="url" className="border-2 boder-solid border-black rounded-lg p-1" />

            <button className="bg-orange-300 rounded-sm border-2 border-black p-1 my-6 self-center" type="submit">Add Pet</button>
        </form>
        <p>{message}</p>
    </div>
}