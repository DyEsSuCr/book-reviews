// NOTE: Thirds
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

// NOTE: Local
import env from '@/config'
import { router } from '@/routes'
import { response } from '@/utils'

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

app.use((_, res) => response(res, 404, { error: 'Rout Not Found' }))

export default app
