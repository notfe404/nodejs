const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {name: { 
        type: String, 
        required: [true, 'Product name is required'], 
        trim: true,
    },
        
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Product price must be a positive number']
    },
    description: {
        type: String,
        default: ''
    },
    thumbnail: String,
    Images: [{type: String}],
    stock: {
        type: Number,
        required: [true, 'Product stock is required'],
        default: 0,
        min: [0, 'Product stock cannot be negative']
    }
});

module.exports = mongoose.model('Product', productSchema);