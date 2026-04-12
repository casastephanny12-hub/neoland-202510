import { model } from 'mongoose'
import { postSchema } from '../schemas/index.js'

export const PostModel = model('Post', postSchema)