import { schemaValidator } from '@/middlewares/schemaValidator'
import { userSigninSchema, userSignupSchema } from '@/schemas/user.schema'
import { Router } from 'express'
import { AuthController } from './auth.controller'
import { asyncWrapper } from '@/middlewares/asyncWrapper'

const router = Router()

router.post('/signin', schemaValidator(userSigninSchema), asyncWrapper(AuthController.login))
router.post('/signup', schemaValidator(userSignupSchema), asyncWrapper(AuthController.register))

export { router }
