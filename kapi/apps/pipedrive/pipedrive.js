const axios = require('axios')
let domain = process.env.PIPEDRIVE_DOMAIN
let token = process.env.PIPEDRIVE_TOKEN
let local = 'kapi/apps/pipedrive/pipedrive.js'

let url = `https://${domain}.pipedrive.com/api/v1/deals?api_token=${token}&status=won&sort=won_time%20DESC`

async function getDeals() {

    var data;

    await axios({
            method: 'GET',
            url: url
        })
        .then(function (response) {

            data = response.data
        });

    return data;
}

module.exports = {
    getDeals: getDeals
}