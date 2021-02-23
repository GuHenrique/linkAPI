const { Router } = require('express');
const routes = Router();
let local = 'kapi/apps/pipedrive/routes/v1.js'
let pipedrive = require('../pipedrive')

module.exports = {
    v1: routes
};