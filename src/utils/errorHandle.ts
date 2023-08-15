import { NextFunction, Request, Response } from 'express'
import { ErrorMessajes } from '@/interfaces/errors.interface'

export const errorHandle = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  res.status(500).json({ error: ErrorMessajes.INTERNAL_SERVER_ERROR })
  console.log(err.message)
}
