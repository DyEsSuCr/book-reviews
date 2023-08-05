import { type Review } from '@/interfaces/review.interface'
import { ReviewModel } from '@/models/reviews'

export const findAllReviews = async () => await ReviewModel.find()
export const findBookReviews = async (id: string) => await ReviewModel.find({ bookId: id }).populate('userId', { _id: 0, username: 1 }).sort([['createdAt', -1]])
export const addReview = async (data: Review) => await ReviewModel.create(data)
