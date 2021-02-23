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

async function getContact(id) {

    let data

    await axios({
            method: 'GET',
            url: `https://${domain}.pipedrive.com/api/v1/persons?api_token=${token}`
        })
        .then((response) => {

            let res = response.data.data
            for (var i in res) {
                if (id == res[i]['id']) data = res[i]['d4b4baaa3af3b9a26cbd33caab0fda11f29ecc3f']
            }
            console.log('teste2')

        }).catch((error) => {

            Hermodr.error(local, error)
            data = error
        })

    return data;
}



module.exports = {
    getWonDealsByDate: getWonDealsByDate,
    getContact: getContact
}