const cartController =require('../controllers/cart.controller');
const authValidator= require('../middleware/auth.moddleware');

const routes=async (app)=>{
    app.post('/ecom/api/v1/cart',
    authValidator.isAuthentication
    ,cartController.addToCart);
}

module.exports=routes