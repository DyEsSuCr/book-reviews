import mongoose from 'mongoose'
import env from '@/config'

export const dbConnect = async () => {
  try {
    const db = await mongoose.connect(env.URI)
    console.log(`DB connected to ${db.connection.name}`)
  } catch (err) {
    console.log(err)
  }
}
