const locale = process.env.LOCATION
const CronJob = require('cron').CronJob;
const deals = require('./Deals')
let local = 'kapi/domain/models/cron.js'

var job = new CronJob('1 * * * * *', function () {

    Hermodr.log(local, 'Deals Import Started')
    deals.prepareOpportunity()
}, null, true, locale);

job.start();