import { type Review } from '@/interfaces/review.interface'
import { ReviewModel } from '@/models/reviews'

export class ModelReviews {
  static async getAll ({ id }: { id?: string }): Promise<Review[]> {
    if (id) {
      return await ReviewModel.find({ bookId: id }).populate('userId', { _id: 0, username: 1 }).sort([['createdAt', -1]])
    }

    return await ReviewModel.find()
  }

  static async create ({ data }: { data: Review }): Promise<Review> {
    const reviews = await ReviewModel.create(data)

    return reviews
  }
}
