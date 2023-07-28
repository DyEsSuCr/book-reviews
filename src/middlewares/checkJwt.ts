import { NextFunction, Response } from 'express'

import { responseErr, verifyToken, response } from '@/utils'
import { UserModel } from '@/models/users'
import { RequestExt } from '@/interfaces/req.interface'

export const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  try {
    if (!authorization) return response(res, 403, 'NO_TOKEN_PROVIDED')
    if (!authorization.toLocaleLowerCase().startsWith('bearer')) return response(res, 403, 'NO_BEARER_TOKEN')

    const decodedToken = verifyToken(authorization.substring(7))
    if (!decodedToken) return response(res, 403, 'INVALID_TOKEN')

    const user = await UserModel.findById(decodedToken)
    if (!user) return response(res, 404, 'USER_NOT_FOUND')

    req.user = user
    return next()
  } catch (err) {
    responseErr(res, 'JWT_ERROR')
  }
}