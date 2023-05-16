const catchError = require('../utils/catchError');
const model = require('../models/Region');

const getAll = catchError(async(req, res) => {
    const results = await model.findAll();
    return res.json(results);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await model.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});



module.exports = {
    getAll,    
    getOne    
}