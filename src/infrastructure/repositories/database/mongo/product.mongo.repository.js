const ProductModel = require('./models/product.model');

class ProductMongoRepository {
    async getAll() {
        return ProductModel.find();
    }

    async create(productData) {
        return ProductModel.create(productData);
    }
}
module.exports = ProductMongoRepository;  