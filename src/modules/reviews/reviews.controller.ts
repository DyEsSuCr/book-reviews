import { type RequestExt } from '@/interfaces/req.interface'
import { response } from '@/utils'
import { type Request, type Response } from 'express'
import { ModelReviews } from './reviews.services'

export class ReviewController {
  static async getAll (req: Request, res: Response) {
    const reviews = await ModelReviews.getAll({})

    response(res, 200, reviews)
  }

  static async getById (req: Request, res: Response) {
    const reviews = await ModelReviews.getAll({ id: req.params.id })

    response(res, 200, reviews)
  }

  static async create (req: RequestExt, res: Response) {
    const reviews = await ModelReviews.create({
      data: {
        bookId: req.body.bookId,
        userId: req.user?.id,
        review: req.body.review
      }
    })

    response(res, 200, reviews)
  }
}
