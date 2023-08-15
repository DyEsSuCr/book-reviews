// NOTE: Thirds
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

// NOTE: Local
import env from '@/config'
import { router } from '@/routes'
import { errorHandle } from '@/utils'

// NOTE: App Init
const app = express()
app.disable('x-powered-by')

// NOTE: Settings
app.set('port', env.PORT)

// NOTE: MiddleWares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// NOTE: Routes
app.use('/api', router)

// NOTE: ErrorHandle
app.use(errorHandle)

export default app
