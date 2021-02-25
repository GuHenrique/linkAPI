const locale = process.env.LOCATION
const cronTime = process.env.CRON_TIME
const CronJob = require('cron').CronJob;
const deals = require('./Deals')
let local = 'kapi/domain/models/cron.js'

var job = new CronJob(cronTime, function () {

    Hermodr.log(local, 'Deals Import Started')
    deals.prepareOpportunity()
}, null, true, locale);

job.start();