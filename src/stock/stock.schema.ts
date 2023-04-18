import { model , Schema} from 'mongoose'


const StockSchema = new Schema({
    name: {
        required: true,
        type: String    
    },
    quantify: {
        required: true,
        type: Number
    },
    price: {
        required: true,
        type: Number
    },
    stockValue: {
        required: true,
        type: Number
    }
}, {
    timestamps: true
})

export default model('Stock', StockSchema)