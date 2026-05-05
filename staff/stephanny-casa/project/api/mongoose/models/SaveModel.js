import { model } from 'mongoose'
import { saveSchema } from'../schemas/index.js'

export const SaveModel = model('Save', saveSchema)