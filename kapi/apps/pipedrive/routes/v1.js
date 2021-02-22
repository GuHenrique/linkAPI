const { Router } = require('express');
const routes = Router();
let local = 'kapi/apps/pipedrive/routes/v1.js'
let pipedrive = require('../pipedrive')

routes.get('/deals', async (req, res) => {

    let data = await pipedrive.prepareOpportunity()
    if(data && data.success && data.success == false) res.status(data.errorCode)
    res.json(data)
});

module.exports = {
    v1: routes
};