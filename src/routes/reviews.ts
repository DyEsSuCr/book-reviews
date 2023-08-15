import { Router } from 'express'
import { ReviewController } from '@/modules/reviews/reviews.controller'
import { checkJwt } from '@/middlewares/checkJwt'

const router = Router()

router.get('/', ReviewController.getAll)
router.get('/:id/book', ReviewController.getById)
router.post('/', checkJwt, ReviewController.create)

export { router }
