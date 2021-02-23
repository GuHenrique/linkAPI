const { Router } = require('express');
const routes = Router();
let local = 'kapi/apps/bling/routes/v1.js'
let bling = require('../bling')
let contact = require('../../../domain/models/Contact')

module.exports = {
    v1: routes
};