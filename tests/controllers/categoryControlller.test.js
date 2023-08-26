const {mockRequest,mockResponse} = require('./mocker');
const categoryController= require('../../controllers/category.controller');
const categoryService= require('../../services/category.service');

const categoryPayload = {
    id:1,
    name:'Test Category',
    description: 'this is Test Category',
    update:jest.fn()
}

test('categoryController sould create a new category', async()=>{
    const spy= jest.spyOn(categoryService, 'create').mockImplementation(()=>{
        return categoryPayload
    });
    const req= mockRequest();
    const res= mockResponse();
   const responce = await categoryController.createCategory(req, res)
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Category created successfully',
        data: categoryPayload
    })
})

test('categoryController sould not create a new category', async()=>{
    const spy= jest.spyOn(categoryService, 'create').mockImplementation(()=>{
        return undefined;
    });
    const req= mockRequest();
    const res= mockResponse();
    const responce = await categoryController.createCategory(req, res)
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Bad request'
    })
});
test('category controller should return all categories', async () => {
    const req= mockRequest();
    const res= mockResponse();
    const spy= jest.spyOn(categoryService, 'getByName').mockImplementation(()=>{
        return {categoryPayload};
    });
    const responce = await categoryController.getAllCategories(req, res) ;
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
   
})
test('category controller should return all categories', async () => {
    const req= mockRequest();
    req.query={}
    const res= mockResponse();
    const spy= jest.spyOn(categoryService, 'getAll').mockImplementation(()=>{
        return {categoryPayload};
    });
    const responce = await categoryController.getAllCategories(req, res) ;
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
   
})
test('category controller should not return all categories', async () => {
    const req= mockRequest();
    req.query={}
    const res= mockResponse();
    const spy= jest.spyOn(categoryService, 'getAll').mockImplementation(()=>{
        return undefined;
    });
    const responce = await categoryController.getAllCategories(req, res) ;
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
   
})

test('category controller should return categories by id', async () => {
    const req= mockRequest();
    const res= mockResponse();
    const spy= jest.spyOn(categoryService, 'getById').mockImplementation(()=>{
        return categoryPayload
    });
    const responce = await categoryController.getCategoryById(req, res) ;
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
   
})
test('category controller should not return categories by id', async () => {
    const req= mockRequest();
    const res= mockResponse();
    const spy= jest.spyOn(categoryService, 'getById').mockImplementation(()=>{
        return undefined
    });
    const responce = await categoryController.getCategoryById(req, res) ;
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
   
});

test('category controller should update categories', async () => {
    const req= mockRequest();
    const res= mockResponse();
    const spy= jest.spyOn(categoryService, 'update').mockImplementation(()=>{
        return categoryPayload
    });
    const responce = await categoryController.updateCategory(req, res) ;
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
   
})
test('category controller should not update categories', async () => {
    const req= mockRequest();
    const res= mockResponse();
    const spy= jest.spyOn(categoryService, 'update').mockImplementation(()=>{
        return;
    });
    const responce = await categoryController.updateCategory(req, res) ;
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(400);
   
})

test('category controller should delete categories', async () => {
    const req= mockRequest();
    const res= mockResponse();
    const spy= jest.spyOn(categoryService, 'deletes').mockImplementation(()=>{
        return categoryPayload;
    });
    const responce = await categoryController.deleteCategory(req, res) ;
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
   
})
test('category controller should not delete categories', async () => {
    const req= mockRequest();
    const res= mockResponse();
    const spy= jest.spyOn(categoryService, 'deletes').mockImplementation(()=>{
        return ;
    });
    const responce = await categoryController.deleteCategory(req, res) ;
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
   
})
test('category controller should get categories by products', async () => {
    const req= mockRequest();
    const res= mockResponse();
    const spy= jest.spyOn(categoryService, 'getProducts').mockImplementation(()=>{
        return [categoryPayload];
    });
    const responce = await categoryController.getAllCategoryByProducts(req, res) ;
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
   
})
test('category controller should not get categories by products', async () => {
    const req= mockRequest();
    const res= mockResponse();
    const spy= jest.spyOn(categoryService, 'getProducts').mockImplementation(()=>{
        return ;
    });
    const responce = await categoryController.getAllCategoryByProducts(req, res) ;
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
   
})
