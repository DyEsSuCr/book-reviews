import { type Review } from '@/interfaces/review.interface'
import { Schema, model } from 'mongoose'

const ReviewSchema = new Schema<Review>(
  {
    review: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    bookId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const ReviewModel = model('Review', ReviewSchema)
