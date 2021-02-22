function router(app) {
    
    const {v1} = require("./v1");
    app.use('/bling/v1', v1)
    
    return app;
}


module.exports = {
    "router": router
};