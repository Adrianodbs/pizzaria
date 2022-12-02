import {Router, Request, Response} from 'express'

const router = Router()

//criando rota da API
router.get('/teste', (req: Request, res: Response)=>{
  return res.json({nome: 'Sujeito Pizza'})
})

export {router}