import { Form } from './components/commons/Form'
import { Field } from './components/commons/Field'
import { PasswordField } from './components/commons/PasswordField'
import { Anchor } from './components/commons/Anchor'
import { Button } from './components/commons/Button'

import { useContext } from '../context'

import { logic } from '../logic'

import { logger } from '../logger'

export function Register({ onGoToLogin }) {
    logger.debug('Register -> call')

    const { onError } = useContext()

    const handleRegisterSubmit = event => {
        event.preventDefault()
        debugger

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value
        const passwordRepeat = form.passwordRepeat.value

        try {
            logic.registerUser(name, email, username, password, passwordRepeat)
                .then(() => {
                    form.reset()

                    onGoToLogin()
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onGoToLogin()
    }

    logger.debug('Register -> render')


    return <div className="p-4">

        <div className='flex flex-col items-center p-2 pt-3 gap-1'>
        <h1 className='text-cyan-400 font-bold text-2xl'>Join to the Community </h1>
        <h2 className='font-bold text-2xl'>Jumpshare</h2>
        </div>

        <Form onSubmit={handleRegisterSubmit}>
            <Field alias="name" type="text">Name</Field>

            <Field alias="email" type="email">Email</Field>

            <Field alias="username" type="text">Username</Field>

            <PasswordField alias="password">Password</PasswordField>

            <PasswordField alias="passwordRepeat">Password Repeat</PasswordField>

            <Button className="self-center w-50 h-8 pt-1 rounded-2xl text-white text-center font-bold bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500" type="submit">Create account</Button>
        </Form>
        <div className="flex items-center justify-center gap-1">
        <p className='text-sm text-gray-400 font-bold pt-2'>Do you have an account?</p>
        <Anchor onClick={handleLoginClick} className="text-sm text-pink-500 font-style: italic font-bold underline underline-offset-1">Login</Anchor>
        </div>
    </div>
}