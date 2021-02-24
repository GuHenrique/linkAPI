require('dotenv').config()
require('./infrastructure/db/mongodb')

global.Hermodr = require('./domain/utils/hermodr').Hermodr

const express = require('express')
const bodyParser = require('body-parser')
var app = express()
let local = 'kapi/app.js'


app.use(bodyParser.json())
app = require("./domain/utils/router").router(app)

require('./domain/models/cron')

app.listen(process.env.SRV_PORT, () => Hermodr.log(local, 'api funcionando'))