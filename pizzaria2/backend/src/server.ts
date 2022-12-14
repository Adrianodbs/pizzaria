import express, {Request, Response, NextFunction} from 'express'
import 'express-async-errors'
import cors from 'cors'
import path from 'path'

import {router} from './routes'

const app = express()
app.use(express.json())
app.use(cors())

//para falar que as rotas da minha aplicação estarão dentro do router
app.use(router)

//para acessar as imagens
app.use(
  '/files',
  express.static(path.resolve(__dirname,'..','tmp'))
)

app.use((err:Error, req: Request, res:Response, next:NextFunction)=>{
  if(err instanceof Error){
    //Se for uma instancia do tipo erro
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status:'error',
    message: 'Internal server error.'
  })
})

//app.listen para inicializar o projeto, é necessário também escolher em qual porta ele vai rodar
app.listen(3333, ()=> console.log('Servidor online'))