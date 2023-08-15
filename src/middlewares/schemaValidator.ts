import { ErrorMessajes } from '@/interfaces/errors.interface'
import { response, responseErr } from '@/utils'
import { type NextFunction, type Request, type Response } from 'express'
import { ZodError, type AnyZodObject } from 'zod'

export const schemaValidator = (schema: AnyZodObject) => ({ body, params, query }: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({ body, params, query })
    next()
  } catch (err) {
    if (err instanceof ZodError) return response(res, 400, err.issues.map((issue) => ({ messaje: issue.message })))
    return responseErr(res, ErrorMessajes.INTERNAL_SERVER_ERROR)
  }
}
