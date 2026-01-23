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

         <Form onSubmit={handleAddPeSubmit}>

            <Field alias="name" type="text">Name</Field>

            <Field alias="birthdate" type="date">Date of Birth</Field>

            <Field alias="weight" type="number">Weight (kg)</Field>

            <Field alias="image" type="url">Image</Field>

            <Button className="self-center" type="submit">Add Pet</Button>

        </Form>
        <p>{message}</p>
    </div>
}