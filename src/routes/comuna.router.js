const { getAll, getOne } = require('../controllers/comuna.controllers');
const express = require('express');

const comunaRouter = express.Router();

comunaRouter.route('/')
    .get(getAll)

comunaRouter.route('/:id')
    .get(getOne)

module.exports = comunaRouter;