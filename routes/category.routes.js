const  categoryController=require('../controllers/category.controller');
const categoryValidator=require('../middleware/category.middleware');
const authValidator=require('../middleware/auth.moddleware');

const routes=(app)=>{
    app.post(
        '/ecom/api/v1/category',
        authValidator.isAuthentication,
    categoryValidator.validateCreate,
    categoryController.createCategory);

    app.get('/ecom/api/v1/category',
    categoryController.getAllCategories,
    categoryController.getCategoryByName);

    app.get('/ecom/api/v1/category/:id',
    categoryValidator.validateGetById,
    categoryController.getCategoryById);

    // put the category
    app.put('/ecom/api/v1/category/:id',
    categoryValidator.validateUpdate,
    categoryController.updateCategory);

    app.patch('/ecom/api/v1/category/:id',
    categoryValidator.validatePartialUpdate,
    categoryController.updateCategory);

    
    app.delete('/ecom/api/v1/category/:id',
    categoryController.deleteCategory)

    app.get('/ecom/api/v1/category/:id/products',
    categoryController.getAllCategoryByProducts)
}


module.exports=routes;