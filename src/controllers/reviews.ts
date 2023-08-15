import { type Request, type Response } from 'express'
import { ModelReviews } from '@/services/reviews'
import { response, responseErr } from '@/utils'
import { ErrorMessajes } from '@/interfaces/errors.interface'
import { type RequestExt } from '@/interfaces/req.interface'

export const getAllReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await ModelReviews.getAll({})
    response(res, 200, reviews)
  } catch (err) {
    responseErr(res, ErrorMessajes.INTERNAL_SERVER_ERROR)
  }
}

export const getBookReviews = async ({ params }: Request, res: Response) => {
  try {
    const reviews = await ModelReviews.getAll({ id: params.id })
    response(res, 200, reviews)
  } catch (err) {
    responseErr(res, ErrorMessajes.INTERNAL_SERVER_ERROR)
  }
}

export const createReview = async (req: RequestExt, res: Response) => {
  try {
    const reviews = await ModelReviews.create({
      data: {
        bookId: req.body.bookId,
        userId: req.user?.id,
        review: req.body.review
      }
    })
    response(res, 200, reviews)
  } catch (err) {
    responseErr(res, ErrorMessajes.INTERNAL_SERVER_ERROR)
  }
}
