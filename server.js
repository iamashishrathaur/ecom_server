const express=require('express');
const bodyParser=require('body-parser');
require('dotenv').config();

const categoryRoutes=require('./routes/category.routes');
const productRoutes=require('./routes/product.routes');
const authRoutes=require('./routes/auth.routes');
const cartRoutes=require('./routes/cart.routes');

const roleRoutes=require('./routes/role.routes');

const {dbSync,syncTable}=require('./config/db_sync')

const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

categoryRoutes(app);
productRoutes(app);
authRoutes(app)
roleRoutes(app)
cartRoutes(app)

if(process.env.SYNC){
    syncTable(false,true,require('./models/index').Cart).then(()=>{
        syncTable(false,true,require('./models/index').Products).then(()=>{
            syncTable(false,true,require('./models/index').Cart_Products)
        })
    })
}


const port=process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send('Hello World');
});

// app.post('/api/v1/auth/login',(req,res)=>{
//     res.send('Hello World');
// });

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});