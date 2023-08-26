const cartService=require('../services/cart.service');
const STATUS={
    CREATION:'creation',
    PLACED:'placed',
    CANCELLED:'cancelled'
}

serverError={
  err:"Something went wrong"
}

const addToCart =async (req,res)=>{
    let cart= await cartService.getCartByUser(req.user,STATUS.CREATION);
    if(!cart){
        cart =await cartService.createCart(req.user);
    }
    const responce= await cartService.addProductToCart({
        productId:req.body.productId,
        cartId:cart.id
    })
    if(!responce){
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        mess:"Successfully created",
        data:responce
    });
}

module.exports={
   addToCart
}