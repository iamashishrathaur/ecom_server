
const roleService=require('../services/role.service');



const serverError ={
    mess:"Server Errror",
    err:"Not able to create roles"
}

const addRoleService=async(req,res)=>{
   const responce = await roleService.addRole(req.body.userId,req.body.roleId);
   if(!responce){
    return res.status(500).json(serverError)
   }
   return res.status(200).json({
    mess:"Successfully add roles ",
    data:responce
   })
}

const distroyService=async(req,res)=>{
    const responce = await roleService.removeRole(req.body.userId,req.body.roleId);
    if(!responce){
        return res.status(500).json(serverError)  
    } 
    return res.status(200).json({
        mess:"Successfully delete roles ",
        data:responce
       })
    }
    // const removeRoleFrmoUser=async(req,res)=>{
    //     const responce = await roleService.addRole(req.body.userId,req.body.roleId);
    //     if(!responce){
    //         return res.status(500).json(serverError)  
    //     } 
    //     return res.status(200).json({
    //         mess:"Successfully delete roles ",
    //         data:responce
    //        })

    // }

module.exports={
    addRoleService,
    distroyService

}