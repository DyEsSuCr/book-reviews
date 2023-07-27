import { Response } from "express"

export const response = (res: Response, status: number, data: unknown) => res.status(status).json(data)

export const responseErr = (res: Response, error: string) => res.status(500).send({ error })