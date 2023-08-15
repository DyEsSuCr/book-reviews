import { ModelAuth } from '@/modules/auth/auth.services'
import { response } from '@/utils'
import { type Request, type Response } from 'express'

export class AuthController {
  static async login ({ body }: Request, res: Response) {
    const { email, password } = body
    const logedUser = await ModelAuth.login({ email, password })

    response(res, 200, logedUser)
  }

  static async register ({ body }: Request, res: Response) {
    const { username, email, password } = body
    const registerUser = await ModelAuth.register({ username, email, password })

    response(res, 201, registerUser)
  }
}
