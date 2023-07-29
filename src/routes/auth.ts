import { Router } from 'express'
import { signinCtrl, signupCtrl } from '@/controllers/auth'
import { schemaValidator } from '@/middlewares/schemaValidator'
import { userSigninSchema, userSignupSchema } from '@/schemas/user.schema'

const router = Router()

router.post('/signin', schemaValidator(userSigninSchema), signinCtrl)
router.post('/signup', schemaValidator(userSignupSchema), signupCtrl)

export { router }