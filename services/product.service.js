const Product = require('../models/product.model');

const createProduct = async (productData) => {
    const{name, price, description, thumbnail, Images, stock} = productData;
    const product = await Product.create({
        name: name.trim(),
        price,
        description,
        thumbnail,
        Images,
        stock
    });
    return product;
};

const updateProduct = async (productId, updateData) => {}
const deleteProduct = async (productId) => {}
const getProductById = async (productId) => {}
const getAllProducts = async () => {}
const searchProducts = async (query) => {}
const filterProducts = async (filter) => {}
const paginateProducts = async (page, limit) => {}
const sortProducts = async (sortBy, order) => {}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getAllProducts,
    searchProducts,
    filterProducts,
    paginateProducts,
    sortProducts
}