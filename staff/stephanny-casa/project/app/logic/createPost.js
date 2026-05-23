import { data } from '../data'
import { validate, SystemError, AuthError, errorMap } from 'com'

export function createPost(text, url) {
    if (data.getToken() === null) throw new AuthError('user not logged in')
    validate.text(text, 'text')
    validate.url(url, 'url')

    return fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${data.getToken()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, url })
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