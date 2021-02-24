const axios = require('axios')
let domain = process.env.PIPEDRIVE_DOMAIN
let token = process.env.PIPEDRIVE_TOKEN
let local = 'kapi/apps/pipedrive/pipedrive.js'

let url = `https://${domain}.pipedrive.com/api/v1/deals?api_token=${token}&status=won&sort=won_time%20DESC`

let {
    createContact,
    checkContactExistence
} = require('../../domain/models/Contact')
let {
    checkDealExistence,
    createDeals
} = require('../../domain/models/Deals')


async function getWonDealsByDate() {

    var data;

    await axios({
            method: 'GET',
            url: url
        })
        .then((response) => {

            data = response.data.data
        }).catch((error) => {

            Hermodr.error(local, error.response.data)
            data = error.response.data
        })

    return data;
}



module.exports = {
    getWonDealsByDate,
}