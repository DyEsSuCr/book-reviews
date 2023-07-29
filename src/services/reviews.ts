import { ReviewModel } from '@/models/reviews'

export const findAllReviews = async () => await ReviewModel.find()