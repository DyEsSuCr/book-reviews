import env from '@/config'
import { sign, verify } from 'jsonwebtoken'

export const generateToken = (id: string) => sign(id, env.SECRET)

export const verifyToken = (token: string) => {
  try {
    return verify(token, env.SECRET)
  } catch (err) {
    console.log(err)
  }
}
