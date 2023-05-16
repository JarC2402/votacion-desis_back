const catchError = require('../utils/catchError');
const Candidato = require('../models/Candidato');

const getAll = catchError(async(req, res) => {
    const results = await Candidato.findAll();
    return res.json(results);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Candidato.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

module.exports = {
    getAll,
    getOne
}