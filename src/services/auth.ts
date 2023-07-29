import { Auth } from "@/interfaces/auth.interface"
import { User } from "@/interfaces/user.interface"
import { encrypt, comparePass, generateToken } from '@/utils'
import { UserModel } from '@/models/users'

export const registerNewUser = async ({ email, password, username }: User) => {
  const userFound = await UserModel.findOne({ $or: [{ email }, { username }] })
  if (userFound) return 'ALREADY_USER'

  const passwordHash = await encrypt(password)

  const registeredUser = await UserModel.create({
    email,
    password: passwordHash,
    username
  })

  return {
    id: registeredUser.id,
    username: registeredUser.username,
    email: registeredUser.email,
  }
}

export const loginUser = async ({ email, password }: Auth) => {
  const userFound = await UserModel.findOne({ email })
  if (!userFound) return 'USER_NOT_FOUND'

  const matchPassowrd = await comparePass(password, userFound.password)
  if (!matchPassowrd) return 'PASSWORD_INCORRECT'

  const token = generateToken(userFound.id)

  return {
    token,
    user: {
      id: userFound.id,
      username: userFound.username,
      email: userFound.email,
    }
  }
}