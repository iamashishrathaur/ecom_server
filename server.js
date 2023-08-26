const express= require('express');
const bodyParser= require('body-parser');
const categoryRoutes = require('./routes/category.routes');
const port=3000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

categoryRoutes(app);

app.get('/', function(req, res){
    res.send("Welcome to Sequlize")
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})