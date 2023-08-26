const authService=require('../services/auth.service');


const serverError = {
    message:"not able to responce ",
    err:"server error",
    data:{}

}

const createUser= async(req,res)=>{
    const responce= await authService.create(req.body);
    if(responce.error){
        return res.status(400).json({
            message:responce.error,
            data:{},
            err:'validation error'
        })
    }
    else if(!responce){
       return res.status(500).json(serverError);
    }
    return res.status(200).json({
      message: "Successfully create",
      data:responce,
      err:{}
    });
  }

const signin =async (req,res)=>{
     const user= await authService.getUserByEmail(req.body.email);
     if(!user){
        return res.status(404).json({
            message:"Email not found"
        });
     }
   if(!authService.checkPass(req.body.password,user.password)){
    console.log("Incorrect Password")
    return res.status(404).json({
        message:"Incorrect Password"
    });
   }
   const token= authService.createToken({id:user.id, email:user.email});
   if(!token){
    return res.status(500).json(serverError);
   }
   return res.status(200).json({
    message:"successfully login",
    data: token
});

}
module.exports={
      createUser,
      signin 
}