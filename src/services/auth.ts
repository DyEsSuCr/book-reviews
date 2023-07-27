import { Auth } from "@/interfaces/auth.interface"
import { User } from "@/interfaces/user.interface"
import { encrypt, comparePass, generateToken } from '@/utils'
import { UserModel } from '@/models/users'

export const registerNewUser = async ({ email, password, username }: User) => {
  const userFound = await UserModel.findOne({ $or: [{ email }, { username }] })

  if (userFound) return 'ALREADY_USER'

  const passwordHash = await encrypt(password)

  return await UserModel.create({ email, password: passwordHash, username })
}

export const loginUser = async ({ email, password }: Auth) => {
  const userFound = await UserModel.findOne({ email })

  if (!userFound) return 'USER_NOT_FOUND'

  const matchPassowrd = await comparePass(password, userFound.password)

  if (!matchPassowrd) return 'PASSWORD_INCORRECT'

  const token = generateToken(userFound.id)

  return {
    token,
    userFound
  }
}