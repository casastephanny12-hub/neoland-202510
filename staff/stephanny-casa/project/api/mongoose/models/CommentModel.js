import { model } from 'mongoose'
import { commentSchema } from '../schemas/index.js'

export const CommentModel = model('Comment', commentSchema)