class MockProductRepository {
    constructor() {
        this.products = [
            'este es un producto de prueba', 
            'este es otro producto de prueba',
            'tenemos mas productos de prueba'
        ];
    }

    async getAllProducts() {
        return this.products;
    }

    async create(productData) {
        const newProduct = { ...productData, id: Date.now() };
        this.products.push(newProduct);
        return newProduct;
    }
}

module.exports = MockProductRepository;
