const productService=require('../services/product.service');

const createProduct=async (req,res)=>{
    const responce = await productService.create(req.body);
    if(!responce){
        return res.status(500).json({
            message:"Not create the Products",
            data:{}
        });
    }
    return res.status(200).json({
        message:"Successfuly create the Products",
        data:responce
    });

}
const getAllProduct=async (req,res)=>{
    const responce = await productService.getAll();
    if(!responce){
        return res.status(500).json({
            message:"Not get the Products",
            data:{}
        });
    }
    return res.status(200).json({
        message:"Successfuly get the Products",
        data:responce
    });

}

const updateProduct=async (req,res)=>{
    const responce=await productService.update(req.body,req.params.id);
    if(!responce){
        return res.status(500).json({
            message:"Not able to update the Products",
            data:{}
        }); 
    }
    return res.status(200).json({
        message:"Successfuly update the Products",
        data:responce
    }); 
}

const deleteProduct= async (req,res)=>{
   const responce= await productService.destroy(req.params.id);
   if(!responce){
    return res.status(500).json({
        message:"Not able to delete the Products",
        data:{}
    }); 
   }
   return res.status(200).json({
    message:"delete the Products",
    data:responce
}); 

}

module.exports={
    createProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
}