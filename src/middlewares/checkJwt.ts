import { NextFunction, Response } from 'express'

import { responseErr, verifyToken, response } from '@/utils'
import { UserModel } from '@/models/users'
import { RequestExt } from '@/interfaces/req.interface'

export const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  const bearer = req.headers.acces_token as string

  try {
    if (!bearer) return response(res, 403, 'NO_TOKEN_PROVIDED')
    if (!bearer.toLocaleLowerCase().startsWith('bearer')) return response(res, 404, 'NO_BEARER_TOKEN')

    const decodedToken = verifyToken(bearer.substring(7))
    const user = await UserModel.findById(decodedToken)

    if (!user) return response(res, 404, 'USER_NOT_FOUND')

    req.user = user
    return next()
  } catch (err) {
    responseErr(res, 'JWT_ERROR')
  }
}