import { useState } from 'react'

import { Form } from './commons/Form'
import { Field } from './commons/Field'
import { Button } from './commons/Button'
import { Feedback } from './commons/Feedback'

import { logic } from '../../logic'

export function ChangeUserEmail() {
    console.log('ChangeUserEmail -> call')
    const [feedback, setFeedback] = useState(null) // {message, level}

    const handleChangeEmailSubmit = event => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const newEmail = form.newEmail.value
        const newEmailRepeat = form.newEmailRepeat.value

        try {
            logic.changeUserEmail(email, newEmail, newEmailRepeat)
                .then(() => {
                    form.reset()
                    setFeedback({ message: 'user e-mail succesfully updated', level: 'success' })
                })
                .catch(error => setFeedback({ message: error.message, level: 'error' }))
        } catch (error) {
            setFeedback({ message: error.message, level: 'error' })
        }
    }
    console.log('ChangeUserEmail ->  render')
    return <div>
        <Form onSubmit={handleChangeEmailSubmit}>

            <Field alias="email" type="email">E-mail</Field>

            <Field alias="newEmail" type="email">New E-mail</Field>

            <Field alias="newEmailRepeat" type="email">New E-mail repeat</Field>

            <Button className="self-center" type="submit">Update E-mail</Button>

        </Form>
        {feedback && <Feedback feedback={feedback} />}
    </div>
}