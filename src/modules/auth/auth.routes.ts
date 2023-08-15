import { Router } from 'express'
import { AuthController } from './auth.controller'
import { schemaValidator } from '@/middlewares/schemaValidator'
import { userSigninSchema, userSignupSchema } from '@/schemas/user.schema'

const router = Router()

router.post('/signin', schemaValidator(userSigninSchema), AuthController.login)
router.post('/signup', schemaValidator(userSignupSchema), AuthController.register)

export { router }
