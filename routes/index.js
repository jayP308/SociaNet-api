const router = require('express').Router();

const apiRoutes =require ('./apiRoutes');

router.request('/api', apiRoutes);

module.exports = routers;