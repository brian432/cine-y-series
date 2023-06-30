import { Schema, model } from 'mongoose'
import { IFavs } from '../types'

const FavDataShema: Schema = new Schema<IFavs['data']>({
  backdrop_path: String,
  first_air_date: Date,
  genre_ids: [Number],
  origin_country: [String],
  original_language: String,
  original_name: String,
  overview: String,
  popularity: String,
  vote_count: Number,
  adult: Boolean,
  original_title: String,
  release_date: Date,
  video: Boolean,
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