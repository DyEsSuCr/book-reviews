import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, ZodError } from 'zod'
import { responseErr, response } from '@/utils'
import { ErrorMessajes } from '@/interfaces/errors.interface'


export const schemaValidator = (schema: AnyZodObject) => ({ body, params, query }: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({ body, params, query })
    return next()
  } catch (err) {
    if (err instanceof ZodError) return response(res, 400, err.issues.map((issue) => ({ messaje: issue.message })))
    return responseErr(res, ErrorMessajes.INTERNAL_SERVER_ERROR)
  }
}