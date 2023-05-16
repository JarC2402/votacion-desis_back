const { getAll, getOne } = require('../controllers/candidatos.controllers');
const express = require('express');

const candidatoRouter = express.Router();

candidatoRouter.route('/')
    .get(getAll)

candidatoRouter.route('/:id')
    .get(getOne)
    
module.exports = candidatoRouter;