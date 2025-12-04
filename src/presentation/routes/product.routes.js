const{Router}=require('express');
const ProductoController =require('../controller/product.controller');
const ProductService =require('../../application/use-cases/productservice');
const MockProductRepository =require('../../infrastucture/repositories/product.mock.repository');
const productRepository =new MockProductRepository();
const productService =new ProductService(productRepository);    
const productController =new ProductoController(productService);

const router =Router();
router.get('/', (req, res) => productController.getAll(req, res));
router.post('/', (req, res) => productController.create(req, res));
module.exports = router;
