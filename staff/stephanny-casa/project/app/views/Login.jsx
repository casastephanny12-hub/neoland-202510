import { Form } from './components/commons/Form'
import { Field } from './components/commons/Field'
import { PasswordField } from './components/commons/PasswordField'
import { Button } from './components/commons/Button'
import { Anchor } from './components/commons/Anchor'

import { useContext } from '../context'

import { logic } from '../logic'

import { logger } from '../logger'

export function Login({ onUserLoggedIn, onGoToRegister }) {
    logger.debug('Login -> call')

    const { onError } = useContext()

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => onUserLoggedIn())
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onGoToRegister()
    }

    logger.debug('Login -> render')

    return <div className="p-4">

        <div className='flex flex-col items-center p-2 pt-30 gap-1'>
        <h1 className='text-cyan-400 font-bold text-2xl'>Welcome Back!</h1>
        <h2 className='font-bold text-2xl'>Jumpshare</h2>
        </div>

        <Form onSubmit={handleLoginSubmit}>
            <Field alias="username" type="text">Username</Field>

            <PasswordField alias="password">Password</PasswordField>

            <Button className="self-center w-50 h-8 pt-1 rounded-2xl text-white text-center font-bold bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500" type="submit">Login</Button>
        </Form>
        <div className="flex items-center justify-center gap-1">
        <p className="text-sm text-gray-400 font-bold pt-2">Do you already have an account? </p>
        <Anchor onClick={handleRegisterClick} className="text-sm text-pink-500 font-style: italic font-bold underline underline-offset-1">Register</Anchor>
        </div>
    </div>


}

