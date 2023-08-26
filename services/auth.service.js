const {User,Role}=require('../models/index');
const bcript=require('bcrypt');
const jwt =require('jsonwebtoken');

const create= async(data)=>{
    try{
        const user= await User.create(data);
        const role =await Role.findOne({
            where:{
                name:'Customer'
            }
        })
        user.addRole(role)
        return user;
 
    }catch(errr){
       console.log(errr.name,errr.message)
       if(errr.name=='SequelizeValidationError'  || errr.name=='SequelizeUniqueConstraintError'){
            return{
                error:errr.message
            }
       }
    }
}


const getUserByEmail= async(userEmail)=>{
    try{
        const user = await User.findOne({
            where:{
                email:userEmail
            }
        })
        return user

    }catch(err){
        console.log(err);
    }
}

const getUserById=async(id)=>{
    try{
        const user=User.findByPk(id);
        return user

    }catch(err){
        console.log(err);
    }
}
const checkPass=(userPassword,encriptedPassword)=>{
    return bcript.compareSync(userPassword,encriptedPassword);
}


const varifyToken=(token)=>{
    try{
       const responce =jwt.verify(token,process.env.JWT_SECRET)
       return responce
    }catch(err){
     console.log(err)
    }   
}

const createToken=(user)=>{
    try{
        return jwt.sign(user,process.env.JWT_SECRET,{
            expiresIn:'2 days'
        })
    }catch(err){
     console.log(err)
    }
   
}



module.exports={
     create,
     getUserByEmail,
     checkPass,
     createToken,
     varifyToken,
     getUserById

}