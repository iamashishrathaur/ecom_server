const {Category} =require('../../models/index');
const categoryService = require('../../services/category.service');

const categoryPayload = {
    id:1,
    name:'Test Category',
    description: 'this is Test Category',
    update:jest.fn()
}


test('The Category Service',async ()=>{
   const spy= jest.spyOn(Category,'create').mockImplementation(()=>{
     return categoryPayload;
   })
  const responce= await categoryService.create(categoryPayload);
   expect(spy).toHaveBeenCalled();
   expect(responce).toBe(categoryPayload);
});

test ('the Category Service all categories ', async ()=>{
    const spy= jest.spyOn(Category,'findAll').mockImplementation(()=>{
        return [categoryPayload];
      })
      const responce= await categoryService.getAll();
   expect(spy).toHaveBeenCalled();
   expect(responce).toContain(categoryPayload);
});

test('the category service find by id', async ()=>{
    const spy= jest.spyOn(Category,'findByPk').mockImplementation(()=>{
    return categoryPayload;
    });
    const responce= await categoryService.getById(1);
    expect(spy).toHaveBeenCalled();
    expect(responce).toEqual(categoryPayload);
});

test('the category service update by id', async ()=>{
    const spy1= jest.spyOn(Category,'findByPk').mockImplementation(()=>{
        return categoryPayload;
    });
    const spy2= jest.spyOn(categoryPayload,'update').mockImplementation(()=>{
        return;
    });
    const responce= await categoryService.update(1,{name:'Mobile',description:'new description'});
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
    expect(responce).toBe(categoryPayload);
});

// test('the category service souldnot update category',async ()=>{
//     const spy= jest.spyOn(Category,'findByPk').mockImplementation(()=>{
//         return undefined;
//     });
//     const responce = await categoryService.update(1,{name:'Mobile',description:'new description'});
//      expect(spy).toHaveBeenCalled();
//      expect(responce).toEqual()
// })

