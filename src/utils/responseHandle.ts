import { type Response } from 'express'
import { type ErrorMessajes } from '@/interfaces/errors.interface'

export const response = (res: Response, status: number, data: unknown) => res.status(status).json(data)

export const responseErr = (res: Response, error: ErrorMessajes) => res.status(500).send({ error })
