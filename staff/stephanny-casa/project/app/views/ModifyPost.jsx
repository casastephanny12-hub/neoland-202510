import { Anchor } from './components/commons/Anchor'
import { Form } from './components/commons/Form'
import { Button } from './components/commons/Button'
import { Field } from './components/commons/Field'

import { useEffect, useState } from 'react'
import { useContext } from '../context'
import { useParams } from 'react-router'
import { logic } from '../logic'
import { logger } from '../logger'

export  function ModifyPost({ onGoBack }) {
    logger.debug('ModifyPet -> call')

    const { onSuccess, onError } = useContext()

    const [post, setPost] = useState(null)

    const { postId } = useParams()

    
    useEffect(() => {
        try {
            logic.getPost(postId)
                .then(post => setPost(post))
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])

    
    const handleBackClick = event => {
        event.preventDefault()

        onGoBack(postId)
    }

    const handleModifyPostSubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value
        const url = form.url.value

        try {
            logic.modifyPost(postId, text, url)
                .then(() => onSuccess('post modified!'))
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }

    logger.debug('ModifyPost -> render')

    return <div className="p-4 flex flex-col">

        <Anchor onClick={handleBackClick} className="self-end">⬅️</Anchor>

        <h1 className="text-cyan-400 font-bold text-2xl"> Edit post</h1>
        <h2 className="text-gray-300 text-xl pt-6">What do u want to share?</h2>
        
        <Form onSubmit={handleModifyPostSubmit}>
        <Field alias="text" type="textarea" className="h-32 w-full" defaultValue={post?.text}>Write Something</Field>
        <Field alias="url" type="url" defaultValue={post?.url}>Url (optional) </Field>

        <Button className="w-50 h-8 pt-1 rounded-2xl text-white text-center font-bold bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 mt-4 self-center" type="submit">Edit!</Button>
    </Form>
    </div >

}

