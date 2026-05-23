import { data } from '../data'
import { validate, AuthError, SystemError, errorMap  } from 'com'

export function createComment(postId, text) {
    if (data.getToken() === null) throw new AuthError('user not logged in')
    validate.id(postId, 'postId')
    validate.text(text, 'text')

    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${data.getToken()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(res => {
            const { status } = res

            if (status === 201)
                return

            return res.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {

                    const { error, message } = body
                    const constructor = errorMap[error] || SystemError

                    throw new constructor(message)
                })
        })
}