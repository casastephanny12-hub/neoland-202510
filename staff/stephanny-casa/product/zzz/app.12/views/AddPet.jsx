import { useState } from 'react'

import { Form } from './components/commons/Form'
import { Field } from './components/commons/Field'
import { Button } from './components/commons/Button'
import { Anchor } from './components/commons/Anchor'
import { Feedback } from './components/commons/Feedback'

import { logic } from '../logic'

export function AddPet({ onGoToHome }) {

    console.log('AddPet -> call')

    const [feedback, setFeedback] = useState(null)

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

                .then(() => {
                    form.reset()
                    onGoToHome()
                })
                .catch(error => setFeedback({ message: error.message, level: 'error' }))
        } catch (error) {
            setFeedback({ message: error.message, level: 'error' })
        }

    }

    console.log('AddPet -> render')

    return <div className="p-4">
        <h1 className="font-bold italic text-4xl">MyPet</h1>
        <div className="flex justify-between">

            <h2 className="text-xl italic my-4">Add Pet</h2>
            <Anchor onClick={handleAddPetBackClick}>&lt; Back</Anchor>

        </div>

        <Form onSubmit={handleAddPeSubmit}>

            <Field alias="name" type="text">Name</Field>

            <Field alias="birthdate" type="date">Date of Birth</Field>

            <Field alias="weight" type="number">Weight (kg)</Field>

            <Field alias="image" type="url">Image</Field>

            <Button className="self-center" type="submit">Add Pet</Button>

        </Form>
        {feedback && <Feedback feedback={feedback} />}
    </div>
}