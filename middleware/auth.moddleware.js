const authService=require('../services/auth.service');
const roleService=require('../services/role.service');

const authValidator=async (req,res,next)=>{
    if(!req.body.email  || !req.body.password){
      return res.status(400).json({
        mess:"password or email no empty"
      })   
    }
    next();
}

const validateSignin=(req,res,next)=>{
  if(!req.body.email  || !req.body.password){
    return res.status(400).json({
      mess:"password or email no empty"
    })   
  }
  next();
}

const isAuthentication=async (req,res,next)=>{
  // const token= req.headers('x-access-token');
  const token= req.headers['x-access-token']  
  if(!token){
    return res.status(401).json({
      mess:"Token missing"
    })   
  }
  const responce= authService.varifyToken(token)
  if(!responce){
    return res.status(401).json({
      mess:"Token not varified"
    })  
  }
  const user= authService.getUserById(responce.id);
  if(!user){
    return res.status(404).json({
      mess:"token for invalid user"
    })  
  }
  req.user = user.id;

  next()
}

const checkAdmin=async(req,res,next)=>{
  const user=await authService.getUserById(req.user);
  const role=await roleService.getRole(1);
  const isAdmin=await user.hasRole(role);
  console.log(isAdmin);
  next()

}


module.exports={
    authValidator,
    validateSignin,
    isAuthentication,
    checkAdmin
}