import { Anchor } from './components/commons/Anchor'
import { Form } from './components/commons/Form'
import { Button } from './components/commons/Button'
import { Field } from './components/commons/Field'

import { useContext } from '../context'
import { logic } from '../logic'
import { logger } from '../logger'

export function CreatePost({ onGoToHome }) {
    logger.debug('CreatePost -> call')

    const { onError } = useContext()

    const handleBackClick = event => {
        event.preventDefault()

        onGoToHome()
    }

    const handleCreatePostSubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value
        const url = form.url.value


        try {
            logic.createPost(text, url)
                .then(() => {
                    form.reset()

                    onGoToHome()
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }

    logger.debug('CreatePost -> render')

    return <div className="p-4 flex flex-col">

        <Anchor onClick={handleBackClick} className="self-end"><img src="/back.svg" alt="back"></img></Anchor>

        <h1 className="text-cyan-400 font-bold text-2xl">Create post</h1>
        <h2 className="text-gray-300 text-xl pt-6">What do u want to share?</h2>

        <Form onSubmit={handleCreatePostSubmit}>
            <Field alias="text" type="textarea" className="h-32 w-full">Write Something</Field>
            <Field alias="url" type="url">Url (optional) </Field>

            <Button className="w-50 h-8 pt-1 rounded-2xl text-white text-center font-bold bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 mt-4 self-center" type="submit">Post!</Button>
        </Form>
    </div>
}