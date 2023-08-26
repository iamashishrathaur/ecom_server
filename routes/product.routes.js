const productsController=require('../controllers/product.controller');
const productValidation=require('../middleware/product.middleare');

const routes=(app)=>{
   app.post(
    '/ecom/api/v1/product',
    
   productValidation.validationCreate,
   productsController.createProduct)

   app.get(
    '/ecom/api/v1/product',
   productsController.getAllProduct)

   app.put('/ecom/api/v1/product/:id',
   productsController.updateProduct
   )

   app.delete('/ecom/api/v1/product/:id',
   productsController.deleteProduct)
}

module.exports=routes