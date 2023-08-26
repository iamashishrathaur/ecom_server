const validateCreate= async(req,res,next)=>{
   if(!req.body.name){
    return res.status(400).json({
        status:400,
        message:"name is required"
    });
   }
   next();
}

const validateGetById= async(req,res,next)=>{
    if(Number.isNaN(parseInt(req.params.id))){
        return res.status(400).json({
            status:400,
            message:"Invalid id"
        });
    }
    next();
}

// validate update request

const validateUpdate= async(req,res,next)=>{
    if(!req.body.name || req.body.description){
        return res.status(400).json({
            status:400,
            message:"name and description any one is required"
        });
    }
    next();
}
// validate partial responses

const validatePartialUpdate= async(req,res,next)=>{
    if(!req.body.name || !req.body.description){
        return res.status(400).json({
            status:400,
            message:"name and description , both is required"
        });
    }
    next();
}

module.exports={
 validateCreate,
 validateGetById,
 validateUpdate,
 validatePartialUpdate
}