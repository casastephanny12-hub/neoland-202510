import { ExistenceError, validate } from 'com'
import { data, CommentData} from '../data/index.js'

export function createComment(userId, postId, text) {
    validate.id(userId, 'userId')
    validate.id(postId, 'postId')
    validate.text(text, 'text')

    return data.findPostById(postId)
        .then(post => {
            if (!post) throw new ExistenceError('post not found')

            const comment = new CommentData(null, userId, postId, null, text, null)

            return data.insertComment(comment)
        })
}