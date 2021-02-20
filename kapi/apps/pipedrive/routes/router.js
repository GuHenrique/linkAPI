function router(app) {
    
    const {v1} = require("./v1");
    app.use('/pipedrive/v1', v1)
    
    return app;
}


module.exports = {
    "router": router
};