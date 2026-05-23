import { data } from '../data'
import { validate, AuthError, SystemError, errorMap } from "com";

export function deleteComment(commentId) {
    if (data.getToken() === null) throw new AuthError('user not logged in')

    validate.id(commentId, 'commentId')

    return fetch(`${import.meta.env.VITE_API_URL}/posts/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${data.getToken()}`
        }
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(res => {
            const { status } = res

            if (status === 204)
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