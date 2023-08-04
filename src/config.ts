import { config } from 'dotenv'

config()

const PORT = process.env.PORT
const URI = process.env.DB_URI ?? ''
const SECRET = process.env.JWT_SECRET ?? ''

export default { PORT, URI, SECRET }
