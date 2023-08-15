import { Router } from 'express'
import { ReviewController } from './reviews.controller'
import { checkJwt } from '@/middlewares/checkJwt'
import { asyncWrapper } from '@/middlewares/asyncWrapper'

const router = Router()

router.get('/', asyncWrapper(ReviewController.getAll))
router.get('/:id/book', asyncWrapper(ReviewController.getById))
router.post('/', asyncWrapper(checkJwt), asyncWrapper(ReviewController.create))

export { router }
