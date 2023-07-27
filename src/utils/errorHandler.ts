import { Response } from "express"

export const handleHttp = (res: Response, error: string, errorRow?: unknown) => {
  console.log(`🛑⛔❗${errorRow}❗⛔🛑 `)
  res.status(500)
  res.send({ error })
}