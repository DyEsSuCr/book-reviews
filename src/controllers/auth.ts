import { type Request, type Response } from 'express'
import { response, responseErr } from '@/utils'
import { ModelAuth } from '@/services/auth'
import { ErrorMessajes } from '@/interfaces/errors.interface'

export const signinCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body

  try {
    const authUser = await ModelAuth.login({ email, password })

    response(res, 200, authUser)
  } catch (err) {
    responseErr(res, ErrorMessajes.ERROR_LOGIN)
  }
}

export const signupCtrl = async ({ body }: Request, res: Response) => {
  const { username, email, password } = body

  try {
    const authUser = await ModelAuth.register({ username, email, password })

    response(res, 201, authUser)
  } catch (err) {
    responseErr(res, ErrorMessajes.ERROR_REGISTER)
  }
}
