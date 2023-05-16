const { getAll, getOne } = require('../controllers/region.controllers');
const express = require('express');

const regionRouter = express.Router();

regionRouter.route('/')
    .get(getAll)

regionRouter.route('/:id')
    .get(getOne)

module.exports = regionRouter;