import { Router } from 'express'
import { getAllReviews, getBookReviews, createReview } from '@/controllers/reviews'
import { checkJwt } from '@/middlewares/checkJwt'

const router = Router()

router.get('/', getAllReviews)
router.get('/:id/book', getBookReviews)
router.post('/', checkJwt, createReview)

export { router }
