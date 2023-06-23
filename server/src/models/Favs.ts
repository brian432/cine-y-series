import { Schema, model } from 'mongoose'
import { IFavs } from '../types'

const FavDataShema: Schema = new Schema<IFavs['data']>({
  poster_path: String,
  id: String,
  title: String,
  name: String,
  vote_average: Number
})

const Favschema: Schema = new Schema<IFavs>({
  data: FavDataShema,
  path: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})
Favschema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Favs = model<IFavs>('Favs', Favschema)

export default Favs