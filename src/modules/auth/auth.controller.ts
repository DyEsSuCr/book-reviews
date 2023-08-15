import { ErrorMessajes } from '@/interfaces/errors.interface'
import { ModelAuth } from '@/modules/auth/auth.services'
import { response, responseErr } from '@/utils'
import { type Request, type Response } from 'express'

export class AuthController {
  static async login ({ body }: Request, res: Response) {
    const { email, password } = body

    try {
      const authUser = await ModelAuth.login({ email, password })

      response(res, 200, authUser)
    } catch (err) {
      responseErr(res, ErrorMessajes.ERROR_LOGIN)
    }
  }

  static async register ({ body }: Request, res: Response) {
    const { username, email, password } = body

    try {
      const authUser = await ModelAuth.register({ username, email, password })

      response(res, 201, authUser)
    } catch (err) {
      responseErr(res, ErrorMessajes.ERROR_REGISTER)
    }
  }
}
