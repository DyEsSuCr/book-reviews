import { Router } from 'express'
import { getAllReviews, getBookReviews } from '@/controllers/reviews'

const router = Router()

router.get('/', getAllReviews)
router.get('/:id/book', getBookReviews)

export { router }
