const { Router } = require('express');
const { prepareOpportunity, getDeals } = require('../models/Deals');
const routes = Router();

routes.get('/dealsImportation', async (req, res) => {
    let data = await prepareOpportunity()
    res.json(data)
})

routes.get('/deals', async (req, res) => {
    let data = await getDeals(req.query)

    if(data.error == true) res.status(400)
    
    res.json(data)
})

function router(app) {
    
    app.use('/kapi/v1', routes)
    
    return app;
}

module.exports = {
    router: router
};