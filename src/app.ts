// NOTE: Thirds
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

// NOTE: Local
import { response } from '@/utils'
import env from '@/config'
import { router } from '@/routes'

// NOTE: App Init
const app = express()

// NOTE: Settings
app.set('port', env.PORT)

// NOTE: MiddleWares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// NOTE: Routes
app.use('/api', router)

app.use((_, res) => response(res, 404, { error: 'Rout Not Found' }))

export default app
