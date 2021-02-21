const axios = require('axios')
let domain = process.env.PIPEDRIVE_DOMAIN
let token = process.env.PIPEDRIVE_TOKEN
let local = 'kapi/apps/pipedrive/pipedrive.js'

let url = `https://${domain}.pipedrive.com/api/v1/deals?api_token=${token}&status=won&sort=won_time%20DESC`

let createUser;
let checkDealExistence;
let checkUserExistence;

async function getDeals() {

    var data;

    await axios({
            method: 'GET',
            url: url
        })
        .then((response) => {

            data = response.data
        }).catch((error) => {

            Hermodr.error(local, error.response.data)
            data = error.response.data
        })

    return data;
}

async function prepareOpportunity() {

    let deals = await getDeals()

    for (var i in deals) {


        if (checkDealExistence(deals[i])) continue

        let user = checkUserExistence(deals[i]['person_id'] || deals[i]['org_id'])
        if (!user) user = createUser(deals[i]['person_id'] || deals[i]['org_id'])

        // new Date().toDateString()
    }



}


module.exports = {
    getDeals: getDeals,
    prepareOpportunity: prepareOpportunity
}