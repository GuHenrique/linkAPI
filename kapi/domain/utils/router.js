function router(app) {

    //Log system
    const { HermodrRoutes } = require('./hermodr')
    app.use('', HermodrRoutes)
    
    
    app = require('../../apps/pipedrive/routes/router').router(app)
    app = require('../../apps/bling/routes/router').router(app)
    
    return app;
}


module.exports = {
    "router": router
};