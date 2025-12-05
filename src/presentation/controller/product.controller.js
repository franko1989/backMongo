class ProductoController {
    constructor(productService) {
        this.productService = productService;
    }

    getAll = async (req, res) => {
        const products = await this.productService.getAllProducts();
        res.status(200).json(products);
    }

    create = async (req, res) => {
        const product = await this.productService.createProduct(req.body);
        res.status(201).json(product);
    }
}

module.exports = ProductoController;
