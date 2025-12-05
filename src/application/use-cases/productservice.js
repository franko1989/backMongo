class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async getAllProducts() {
        return await this.productRepository.getAllProducts();
    }

    async createProduct(productData) {
        return await this.productRepository.create(productData);
    }
}

module.exports = ProductService;
