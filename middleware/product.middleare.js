const validationCreate= async (req,res,next)=>{
    if(!req.body.name || !req.body.cost || !req.body.categoryId){
        return res.status(404).json({
            mess:"name and cost , id require",
            err:"Someting went wrong"
        });
    }
    next();
}

module.exports={
    validationCreate
}