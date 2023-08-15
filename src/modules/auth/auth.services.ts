import { type Auth } from '@/interfaces/auth.interface'
import { ErrorMessajes } from '@/interfaces/errors.interface'
import { type User } from '@/interfaces/user.interface'
import { UserModel } from '@/models/users'
import { comparePass, encrypt, generateToken } from '@/utils'

export class ModelAuth {
  static async register ({ email, password, username }: User): Promise<object | ErrorMessajes> {
    const userFound = await UserModel.findOne({ $or: [{ email }, { username }] })
    if (userFound) return { error: ErrorMessajes.ALREADY_USER }

    const passwordHash = await encrypt(password)

    const registeredUser = await UserModel.create({
      email,
      password: passwordHash,
      username
    })

    return {
      id: registeredUser.id,
      username: registeredUser.username,
      email: registeredUser.email
    }
  }

  static async login ({ email, password }: Auth): Promise<object | ErrorMessajes> {
    const userFound = await UserModel.findOne({ email })
    if (!userFound) return ErrorMessajes.USER_NOT_FOUND

    const matchPassowrd = await comparePass(password, userFound.password)
    if (!matchPassowrd) return ErrorMessajes.PASSWORD_INCORRECT

    const token = generateToken(userFound.id)

    return {
      token,
      user: {
        id: userFound.id,
        username: userFound.username,
        email: userFound.email
      }
    }
  }
}
