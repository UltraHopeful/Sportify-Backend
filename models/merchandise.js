const mongoose = require('mongoose')
const Schema = mongoose.Schema

const merchandiseSchema = new Schema({
    product_id : Number,
    product_name: String,
    product_price: Number,
    product_description: String,
    product_image: String

})

const Merchandise =  mongoose.model('merchandise',merchandiseSchema)
module.exports = Merchandise;