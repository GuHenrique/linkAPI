const { Router } = require('express');
const { prepareOpportunity } = require('./Deals');
const routes = Router();

routes.get('/dealsImportation', async (req, res) => {
    console.log('Import')
    let data = await prepareOpportunity()
    res.json(data)
});

function router(app) {
    
    app.use('/app/v1', routes)
    
    return app;
}

module.exports = {
    router: router
};