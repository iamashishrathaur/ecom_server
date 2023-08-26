const authController=require('../controllers/auth.controller');

const signUpValidator=require('../middleware/auth.moddleware');


const routes=(app)=>{
    app.post(
        '/ecom/api/v1/user/',
        signUpValidator.authValidator,
        authController.createUser);


        app.post('/ecom/api/v1/signin/',
        signUpValidator.validateSignin,
        authController.signin)
}

module.exports=routes