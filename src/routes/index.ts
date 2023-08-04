import { Router } from 'express'
import { readdirSync } from 'fs'
import { parse } from 'path'

const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName: string) => parse(fileName).name

// eslint-disable-next-line array-callback-return
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName)

  if (cleanName !== 'index') {
    void import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})

export { router }
