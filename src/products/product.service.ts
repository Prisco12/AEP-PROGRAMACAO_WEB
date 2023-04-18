import ProductModel from './product.schema'
import { ProductType } from './types/product.types'
import { writeFile, readFile } from 'fs/promises'


export class ProductService {

    async create(product: ProductType){
        const productCreated = await ProductModel.create(product)

        return productCreated
    }
    
    async list(){
        const productList = await ProductModel.find()

        return productList
    }

    async find(id){
        const productById = await ProductModel.findById(id)

        return productById
    }
    async update(id, itemUpdates: ProductType){
        const productById = await ProductModel.findOneAndUpdate({_id: id}, {
            name: itemUpdates.name,
            quantify: itemUpdates.quantify,
            price: itemUpdates.price
        }, {new: true})

        return productById
    }
    async delete(id){
        const productDelete = await ProductModel.findByIdAndDelete(id)

        return productDelete
    }

    async random() {
        let aux: any = []
        const stock: any = await ProductModel.find()

        
        while (aux.length < 4 ) {

            let result = stock[Math.floor(Math.random() * stock.length)]

            if (!aux.includes(result)) {
                aux.push(result)
            }

        }

        return aux
    }

    async totalValue () {
        const productList = await this.list()

        const total = productList.reduce((acc, item) => {
           
            return acc + item.price * item.quantify
        },0)

        return {"ValorTotal": total}
    }

    async write() {
        const productList = await this.list()

        return await writeFile('productFile.json',  JSON.stringify(productList, null, 2))
    }
    async read() {
        const productList = await JSON.parse(await readFile('productFile.json', 'utf-8'))
        
        const result = productList.map(item => {
            let obj = {
                id: item._id,
                name: item.name,
                price: item.price,
                quantify: item.quantify
            }
            return obj
        })

        return result  
    }
}