import { type NextFunction, type Response } from 'express'

import { type RequestExt } from '@/interfaces/req.interface'
import { ErrorMessajes } from '@/interfaces/errors.interface'
import { responseErr, verifyToken, response } from '@/utils'
import { UserModel } from '@/models/users'

export const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  try {
    if (!authorization) return response(res, 403, ErrorMessajes.NO_TOKEN_PROVIDED)
    if (!authorization.toLocaleLowerCase().startsWith('bearer')) return response(res, 403, ErrorMessajes.NO_BEARER_TOKEN)

    const decodedToken = verifyToken(authorization.substring(7))
    if (!decodedToken) return response(res, 403, ErrorMessajes.INVALID_TOKEN)

    const user = await UserModel.findById(decodedToken)
    if (!user) return response(res, 404, ErrorMessajes.USER_NOT_FOUND)

    req.user = user
    next()
  } catch (err) {
    responseErr(res, ErrorMessajes.JWT_ERROR)
  }
}
