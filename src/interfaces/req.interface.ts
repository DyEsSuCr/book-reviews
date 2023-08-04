import { type JwtPayload } from 'jsonwebtoken'
import { type Request } from 'express'

export interface RequestExt extends Request {
  user?: JwtPayload | { id: string }
}
