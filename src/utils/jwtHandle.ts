import env from '@/config'
import { sign, verify } from 'jsonwebtoken'

export const generateToken = (id: string) => sign(id, env.SECRET)

export const verifyToken = (token: string) => verify(token, env.SECRET)