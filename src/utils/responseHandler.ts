import { Response } from "express"

export const response = (res: Response, status: number, data: unknown) => res.status(status).json(data)