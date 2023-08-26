const categoryController = require('../controller/category.controller');

const routes = (app) => {
    app.post(
        '/ecom/api/v1/categories', 
       categoryController.createCategory
    )};

    module.exports = routes;