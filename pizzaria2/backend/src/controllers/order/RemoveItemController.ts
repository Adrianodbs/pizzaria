import {Request, Response} from 'express'
import {RemoveItemService} from '../../services/order/RemoveItemService'

class RemoveItemController{
  async handle(req:Request, res:Response){

    const item_id = req.query.item_id as string

    const removeItemSevice = new RemoveItemService()

    const order = await removeItemSevice.execute({
      item_id
    })

    res.json(order)
  }
}

export {RemoveItemController}