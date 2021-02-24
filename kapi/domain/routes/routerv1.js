const { Router } = require('express');
const { prepareOpportunity } = require('../models/Deals');
const routes = Router();

routes.get('/dealsImportation', async (req, res) => {
    let data = await prepareOpportunity()
    res.json(data)
});

function router(app) {
    
    app.use('/kapi/v1', routes)
    
    return app;
}

module.exports = {
    router: router
};