import { Router } from 'express'
import { getAllReviews } from '@/controllers/reviews'

const router = Router()

router.get('/', getAllReviews)

export { router }