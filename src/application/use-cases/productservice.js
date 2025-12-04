class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getAllProducts() {
        return this.productRepository.getAllProducts();
    }
    async createProduct(productData) {
        return this.productRepository.create(productData);
    }
}
module.exports = ProductService;