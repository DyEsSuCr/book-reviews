import { type Request, type Response } from 'express'
import { findAllReviews, findBookReviews } from '@/services/reviews'
import { response, responseErr } from '@/utils'
import { ErrorMessajes } from '@/interfaces/errors.interface'

export const getAllReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await findAllReviews()
    response(res, 200, reviews)
  } catch (err) {
    responseErr(res, ErrorMessajes.INTERNAL_SERVER_ERROR)
  }
}

export const getBookReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await findBookReviews(req.params.id)
    response(res, 200, reviews)
  } catch (err) {
    responseErr(res, ErrorMessajes.INTERNAL_SERVER_ERROR)
  }
}
