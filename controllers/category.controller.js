const categoryService=require('../services/category.service');
const _=require('lodash');

const createCategory=async (req, res) => {
   const response=await categoryService.create(req.body);
   if(!response){
    return res.status(500).json({
        message: 'Bad request',
    });
   }
   return res.status(201).json({
       message: 'Category created successfully',
       data: response
   });
}


// get all categories
const getAllCategories = async (req, res) => {
    let response;
    if(req.query.name){
      response = await categoryService.getByName(req.query.name);
    }else{
      response = await categoryService.getAll();
    }
  //  response=await categoryService.getAll();
    if(!response){
        return res.status(500).json({
            message: 'Bad request',
        });
    }
    return res.status(200).json({
        message: 'Categories fetched successfully',
        data: response
    });
}

// get id based on category

const getCategoryById = async (req, res) => {
    const response=await categoryService.getById(req.params.id);
    if(!response){
        return res.status(500).json({
            message: 'Bad request',
        });
    }
    return res.status(200).json({
        message: 'Category fetched successfully',
        data: response
    });
}
const getCategoryByName= async (req, res) => {
 const response=await categoryService.getByName(req.params.name);
    if(!response){
        return res.status(500).json({
            message: 'Bad request',
        });
    }
    return res.status(200).json({
        message: 'Category fetched successfully',
        data: response
    });   
}

// update category
 const updateCategory=async (req, res) => {
    const response=await categoryService.update(req.params.id, req.body);
    if(_.isEmpty(response)){
        return res.status(400).json({
            message: 'Not able to find the category',
        });  
    }
    if(!response){
        return res.status(500).json({
            message: 'Bad request',
        });
    }
    return res.status(200).json({
        message: 'Category updated successfully',
        data: response
    });
}
const deleteCategory = async (req,res)=>{
    const responce= await categoryService.deletes(req.params.id);
    if(!responce){
        return res.status(500).json({
            message:"not able to delete category"
        })
    }
    return res.status(201).json({
        message:"successfuly delete category",
        data:responce
    })
   }

   const getAllCategoryByProducts=async(req,res)=>{
    const responce= await categoryService.getProducts(req.params.id,req.query);
    if(!responce){
        return res.status(500).json({
            message:"not able category and products"
        })
    }
    return res.status(201).json({
        message:"successfuly get all category and products",
        data:responce
    })
   }


module.exports={
    createCategory,
    getAllCategories,
    getCategoryById,
    getCategoryByName,
    updateCategory,
    deleteCategory,
    getAllCategoryByProducts
}
