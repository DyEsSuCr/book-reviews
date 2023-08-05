import { type Schema } from 'mongoose'

export interface Review {
  review: string
  bookId: string
  userId: Schema.Types.ObjectId
}
