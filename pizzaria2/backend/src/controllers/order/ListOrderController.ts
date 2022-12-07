import {Request, Response} from 'express'
import {ListOrderService} from '../../services/order/ListOrderService'

class ListOrderController{
  async handle(req:Request, res:Response){

    const listOrdersService = new ListOrderService()
    const orders = await listOrdersService.execute()

    return res.json(orders)
  }
}

export {ListOrderController}