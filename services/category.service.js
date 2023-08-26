const {Category,Products}=require('../models/index');
 const create=async (data)=>{
    try{
        const category= await Category.create({
            name:data.name,
            description:data.description
        });
        return category;
    }catch(err){
        console.log("Error creating category")
        console.log(err);
    }
 }

 // get all category
 const getAll=async ()=>{
    try{
        const categories=await Category.findAll();
        return categories;
    }catch(err){
        console.log("Error getting all category")
        console.log(err);
    }
 }

 // get category by id
 const getById=async (id)=>{
    try{
        const category=await Category.findByPk(id);
        return category;
    }catch(err){
        console.log("Error getting category by id")
        console.log(err);
    }
 }
 // get category by name
 const getByName=async (categoryName)=>{
    try{
        const category=await Category.findOne({
            where:{
                name:categoryName
            }
        });
        console.log(category)
        return category;
    }catch(err){
        console.log("Error getting category by name")
        console.log(err);
    }
 }

 // update category
 const update=async (id,data)=>{
    try{
        const category= await Category.findByPk(id);
        category.name=data.name;
        category.description=data.description;
        await category.update();
        return category;
    }catch(err){
        console.log("Error updating category")
        console.log(err);
    }
 }

 // delete category

 const deletes = async (id)=>{
    try{
        const category=await Category.findByPk(id);
        await category.destroy();
        return category;
    }catch(err){
        console.log("Error delete category")
        console.log(err);
    }
 }

 const getProducts=async (id,query)=>{
    try{
        const category=await Category.findByPk(id,{
            include: {
                model: Products,
                limit: parseInt(query.limit),
                offset: parseInt(query.offset)

            },
        });
        return category
    }catch(err){
        console.log("get category & product error")
        console.log(err);
    }
 }
module.exports={
    create,
    getAll,
    getById,
    getByName,
    update,
    deletes,
    getProducts
}