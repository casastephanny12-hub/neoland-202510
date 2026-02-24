import { useState, useEffect } from 'react'

import { Form } from './components/commons/Form'
import { Field } from './components/commons/Field'
import { Button } from './components/commons/Button'
import { Anchor } from './components/commons/Anchor'
import { Feedback } from './components/commons/Feedback'
import { Spinner } from './components/Spinner'

import { logic } from '../logic'

export function ModifyPet({ petId, onGoBack }) {

    console.log('ModifyPet -> call')

    const [feedback, setFeedback] = useState(null)
    const [pet, setPet] = useState(null)

    useEffect(() => {
        setTimeout(() => {
        try {
            logic.getPet(petId)
                .then(pet => setPet(pet))
                .catch(error => setFeedback({ message: error.message, level: 'error' }))
        } catch (error) {
            setFeedback({ message: error.message, level: 'error' })
        }
    }, 4000)
    }, [])

    const handleBackClick = event => {
        event.preventDefault()

        onGoBack()
    }

    const handleGoToModifyPet = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const weight = Number(form.weight.value)
        const image = form.image.value

        try {
            logic.modifyPet(petId, name, birthdate, weight, image)

                .then(() => setFeedback({ message: 'pet successfully modified', level: 'success' }))
                .catch(error => setFeedback({ message: error.message, level: 'error' }))
        } catch (error) {
            setFeedback({ message: error.message, level: 'error' })
        }

    }

    console.log('ModifyPet -> render')

    return <div className="p-4">
        <h1 className="font-bold italic text-4xl">MyPet</h1>
        <div className="flex justify-between">

            <h2 className="text-xl italic my-4">Modify Pet</h2>
            <Anchor onClick={handleBackClick}>&lt; Back</Anchor>

        </div>

        {pet ? <Form onSubmit={handleGoToModifyPet}>

            <Field alias="name" type="text" defaultValue={pet.name}>Name</Field>

            <Field alias="birthdate" type="date" defaultValue={pet.birthdate}>Date of Birth</Field>

            <Field alias="weight" type="number" defaultValue={pet.weight} step="0.1">Weight (kg)</Field>

            <Field alias="image" type="url" defaultValue={pet.image}>Image</Field>

            <Button className="self-center" type="submit"> Modify Pet</Button>

        </Form> : <Spinner />}
        {feedback && <Feedback feedback={feedback} />}
    </div>
}