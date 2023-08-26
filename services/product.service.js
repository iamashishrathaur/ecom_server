const {Products,Category} =require('../models/index');

const create= async (data)=>{
    try{
        const product= await Products.create(data);
        return product;

    }catch(err){
        console.log(err)
    }
}
const getAll= async ()=>{
    try{
        const product= await Products.findAll({include :Category });
        return product;

    }catch(err){
        console.log(err)
    }
}

const update= async(data,id)=>{
    try{
        const product =await Products.findByPk(id);
        if(!product){
            console.log("not able to find the products")
            return {};
        }
        await product.update(data);
        return product;
        

    }
    catch(err){
        console.log(err)
    }
}

const destroy=async (id)=>{
    try{
        const product = await Products.findByPk(id);
        if(!product){
            console.log("not able to find the products")
            return {};
        }
        await product.destroy();
        return product;

    }catch(err){
       console.log(err)
    }
}

module.exports={
    create,
    getAll,
    update,
    destroy

}