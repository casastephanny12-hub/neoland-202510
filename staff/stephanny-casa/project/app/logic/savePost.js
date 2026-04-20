import { data } from '../data'
import { errorMap, SystemError, AuthError, validate } from "com"

export function savePost(userId, postId) {
    if (data.getToken() === null) throw new AuthError('user not logged in')

    validate.id(userId, 'userId')
    validate.id(postId, 'postId')

    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/save`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${data.getToken()}`
        }
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(res => {

            const { status } = res

            if (status === 200)
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