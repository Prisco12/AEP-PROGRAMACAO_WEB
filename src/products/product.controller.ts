import { Request, Response } from "express";
import { ProductService } from "./product.service";

class ProductController {
    async create(req: Request, res: Response){
        const productCreated = await new ProductService().create(req.body)

        return res.status(200).json(productCreated)
    }
    async list(req: Request, res: Response){
        const productList = await new ProductService().list()

        return res.status(200).json(productList)
    }

    async find(req: Request, res: Response){
        const productById = await new ProductService().find(req.params.id)

        return res.status(200).json(productById)
    }

    async update(req: Request, res: Response){
        const updateDados = await new ProductService().update(req.params.id, req.body)

        return res.status(200).json(updateDados)
    }
    async delete(req: Request, res: Response){
        const deleteDados = await new ProductService().delete(req.params.id)

        return res.status(200).json('Produto deletado com sucesso')
    }

    async random(req: Request, res: Response){
        const random = await new ProductService().random()

        return res.status(200).json(random)
    }

    async total(req: Request, res: Response){
        const total = await new ProductService().totalValue()

        return res.status(200).json(total)
    }
    async write(req: Request, res: Response){
        const list = await new ProductService().write()

        return res.status(201).json('Arquivo criado com Sucesso')
    }
    async read(req: Request, res: Response){
        const readList = await new ProductService().read()

        return res.status(201).json(readList)
    }
}

export default new ProductController()