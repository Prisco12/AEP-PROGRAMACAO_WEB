import StockModel from './stock.schema'
import ProductModel from '../products/product.schema'


export class StockService {

    async create(){
        const product = await ProductModel.find()

        const productStock = product.map(item => {
           const stock = {
                name: item.name,
                quantify: item.quantify,
                price: item.price,
                stockValue: item.price * item.quantify
            }
            return stock
        })

        return StockModel.create(productStock)
    
    }

    async totalValue () {
        const productList = await StockModel.find()

        const total = productList.reduce((acc, item) => {
           
            return acc + item.stockValue
        },0)

        return {"ValorTotal": total}
    }

}
