import { ErrorMessajes } from '@/interfaces/errors.interface'
import { response } from '@/utils'
import { type NextFunction, type Request, type Response } from 'express'
import { type AnyZodObject } from 'zod'

export const schemaValidator = (schema: AnyZodObject) => ({ body, params, query }: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse({ body, params, query })

  if (!result.success) {
    if (result.error) return response(res, 400, result.error.issues.map((issue) => ({ messaje: issue.message })))
    response(res, 500, { error: ErrorMessajes.INTERNAL_SERVER_ERROR })
  }

  next()
}
