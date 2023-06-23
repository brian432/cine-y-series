import { Schema, model } from 'mongoose'
import { IUser } from '../types'

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30
  },
  passwordHash: {
    type: String,
    required: true
  },
  favs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Favs'
    }
  ]
}, { timestamps: true })

UserSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const User = model<IUser>('User', UserSchema)

export default User
