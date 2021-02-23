function router(app) {

    //Log system
    const { HermodrRoutes } = require('./hermodr')
    app.use('', HermodrRoutes)
    
    
    app = require('../models/routerv1').router(app)
    
    return app;
}


module.exports = {
    "router": router
};