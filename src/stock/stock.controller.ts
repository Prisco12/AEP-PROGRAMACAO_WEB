import { Request, Response } from "express";
import { StockService } from "./stock.service";

class StockController {
    async create (req: Request, res: Response) {
        const create = await new StockService().create()

        res.status(200).json(create)
    }

    async total(req: Request, res: Response){
        const total = await new StockService().totalValue()

        return res.status(200).json(total)
    }
    
}

export default new StockController()