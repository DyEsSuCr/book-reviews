import { config } from 'dotenv'

config()

const PORT = process.env.PORT
const URI = process.env.DB_URI || ''

export default { PORT, URI }