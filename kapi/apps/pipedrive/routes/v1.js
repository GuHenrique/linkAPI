const { Router } = require('express');
const routes = Router();
let local = 'kapi/apps/pipedrive/routes/v1.js'
let pipedrive = require('../pipedrive')

routes.get('/deals', async (req, res) => {

    let data = await pipedrive.getDeals()
    res.json(data)
});

module.exports = {
    v1: routes
};