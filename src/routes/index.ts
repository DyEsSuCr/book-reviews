import { Router } from 'express'
import { readdirSync } from 'node:fs'
import path, { parse } from 'node:path'

const PATH_ROUTER = path.join(__dirname, '../modules')
const router = Router()

const cleanFileName = (fileName: string) => parse(fileName).name

readdirSync(PATH_ROUTER).forEach((folder) => {
  const modulePath = path.join(PATH_ROUTER, folder)

  readdirSync(modulePath).forEach((fileName) => {
    const cleanName = cleanFileName(fileName)

    if (cleanName.endsWith('routes')) {
      void import(`${modulePath}/${cleanName}`).then((moduleRouter) => {
        router.use(`/${cleanName.split('.')[0]}`, moduleRouter.router)
      })
    }
  })
})

export { router }
