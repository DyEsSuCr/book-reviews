import { z } from 'zod'

export const userSignupSchema = z.object({
  body: z.object({
    username: z.string().nonempty().min(3, 'min length 3').max(10, 'max length 10'),
    password: z.string().nonempty().min(6, 'min length 6').max(30, 'max length 30'),
    email: z.string().nonempty().email()
  })
})

export const userSigninSchema = z.object({
  body: z.object({
    password: z.string().nonempty().min(6, 'min length 6').max(30, 'max length 30'),
    email: z.string().nonempty().email()
  })
})
