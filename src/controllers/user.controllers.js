const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const results = await User.findAll();
    return res.json(results);
});
const create = catchError(async(req, res) => {
    const result = await model.create(req.body);
    return res.status(201).json(result);
});




module.exports = {
    create,
    getAll   
}