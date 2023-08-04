import { ReviewModel } from '@/models/reviews'

export const findAllReviews = async () => await ReviewModel.find()
export const findBookReviews = async (id: string) => await ReviewModel.find({ bookId: id }).populate('userId', { id: 1, username: 1 })
