const mongoose = require('mongoose')

const product = mongoose.Schema({
    name : String,
    price : Number
})

module.exports = mongoose.model('product',product)