import app from '@/app'
import { dbConnect } from '@/database/connect'

const main = async () => {
  try {
    await dbConnect()

    app.listen(app.get('port'), () => {
      console.log(`🆗✅🆗 Server on port ${app.get('port') as string} 🆗✅🆗`)
    })
  } catch (err) {
    console.warn('🛑⛔ Not connection database ⛔🛑')
    console.error(err)
  }
}

void main()
