const categoryService = require('../services/category.service');

const serverError = {
    message: 'Something went wrong',
    success: false,
    data: {},
    err: 'Not able to do the operation on category'
}

const createCategory = async (req, res) => {
    const response = await categoryService.create(req.body);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(201).json({
        message: 'Successfully created the category',
        success: true,
        data: response,
        err: {}
    });
}

module.exports = {
    createCategory
}