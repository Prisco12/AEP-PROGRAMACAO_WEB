import { Router } from 'express'
import productController from './products/product.controller'
import stockController from './stock/stock.controller'

const routes = Router()

//PRODUCTS

routes.post('/products', productController.create)
routes.get('/products', productController.list)
routes.get('/products/:id', productController.find)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id', productController.delete)
routes.get('/products-random', productController.random)
routes.get('/products-total', productController.total)
routes.get('/productsFile', productController.write)
routes.get('/productsRead', productController.read)

//ESTOQUE

routes.post('/stock', stockController.create)
routes.get('/stockTotal', stockController.total)

// 17 - Estamos exportando a constante routes
export default routes