import { data } from '../data'
import { AuthError, validate, errorMap, SystemError } from "com";

export function getSavedPosts() {
    if (data.getToken() === null) throw new AuthError('user not logged in')
        
    return fetch(`${import.meta.env.VITE_API_URL}/posts/saved`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${data.getToken()}`
        }
    })

        .catch(error => { throw new SystemError('connection error') })
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(posts => posts)

            return res.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body

                    const constructor = errorMap[error] || SystemError

                    throw new constructor(message)
                })

        })

}