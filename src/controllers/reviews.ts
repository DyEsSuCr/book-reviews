import { Request, Response } from 'express'
import { findAllReviews } from '@/services/reviews'
import { response, responseErr } from '@/utils'

export const getAllReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await findAllReviews()
    response(res, 200, reviews)
  } catch (err) {
    responseErr(res, 'FAIALED_GET_REVIEWS')
  }
}