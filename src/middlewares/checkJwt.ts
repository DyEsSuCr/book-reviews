import { type NextFunction, type Response } from 'express'

import { ErrorMessajes } from '@/interfaces/errors.interface'
import { type RequestExt } from '@/interfaces/req.interface'
import { UserModel } from '@/models/users'
import { response, verifyToken } from '@/utils'

export const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (!authorization) return response(res, 403, ErrorMessajes.NO_TOKEN_PROVIDED)
  if (!authorization.toLocaleLowerCase().startsWith('bearer')) return response(res, 403, ErrorMessajes.NO_BEARER_TOKEN)

  const decodedToken = verifyToken(authorization.substring(7))
  if (!decodedToken) return response(res, 403, ErrorMessajes.INVALID_TOKEN)

  const user = await UserModel.findById(decodedToken)
  if (!user) return response(res, 404, ErrorMessajes.USER_NOT_FOUND)

  req.user = user
  next()
}
