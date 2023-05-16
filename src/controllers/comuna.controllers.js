const catchError = require('../utils/catchError');
const Comuna = require('../models/Comuna');

const getAll = catchError(async(req, res) => {
    const results = await Comuna.findAll();
    return res.json(results);
});



const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Comuna.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});


module.exports = {
    getAll,
    getOne
}