const express = require('express');
const router = express.Router();
const userRouter = require('./user.router')
const regionRouter = require('./region.router');
const comunaRouter = require('./comuna.router');
const candidatoRouter = require('./candidato.router');

router.use('/users', userRouter);
router.use('/region', regionRouter);
router.use('/comuna', comunaRouter);
router.use('/candidato', candidatoRouter);


module.exports = router;