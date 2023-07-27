import { Request, Response } from 'express'
import { response, responseErr } from '@/utils'
import { loginUser, registerNewUser } from '@/services/auth'

export const signinCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body

  try {
    const userAuth = await loginUser({
      email,
      password
    })

    response(res, 200, userAuth)
  } catch (err) {
    responseErr(res, 'ERROR_LOGIN')
  }
}

export const signupCtrl = async ({ body }: Request, res: Response) => {
  const { username, email, password } = body

  try {
    const userAuth = await registerNewUser({
      username,
      email,
      password
    })

    response(res, 201, userAuth)
  } catch (err) {
    responseErr(res, 'ERROR_REGISTER')
  }
} 