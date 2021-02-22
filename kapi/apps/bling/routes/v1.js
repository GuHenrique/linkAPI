const { Router } = require('express');
const routes = Router();
let local = 'kapi/apps/bling/routes/v1.js'
let bling = require('../bling')
let contact = require('../../../domain/models/Contact')

routes.get('/contacts', async (req, res) => {

    let data = await contact.createContact()
    if(data && data.success && data.success == false) res.status(data.errorCode)
    res.json(data)
});

module.exports = {
    v1: routes
};