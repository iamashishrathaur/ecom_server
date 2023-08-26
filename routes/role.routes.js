const roleController=require('../controllers/role.controller');

const authValidator=require('../middleware/auth.moddleware');

const routes =async (app)=>{
  app.post('/ecom/api/v1/role/',
  authValidator.isAuthentication,
  authValidator.checkAdmin,
  roleController.addRoleService)

  app.delete('/ecom/api/v1/role/',
  authValidator.isAuthentication,
  roleController.distroyService)
}

module.exports=routes