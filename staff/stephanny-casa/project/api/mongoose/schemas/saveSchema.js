import mongoose from 'mongoose'

const { Schema, ObjectId } = mongoose

export const saveSchema = new Schema ({
    user: {
        type: ObjectId, 
        ref: 'User',
        required: true
    },
    post: {
        type: ObjectId,
        ref: 'Post',
        required: true
    }
})