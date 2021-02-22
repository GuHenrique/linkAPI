const mongoose = require('mongoose')
let local = 'kapi/domain/models/deal.js'

const dealSchema = new mongoose.Schema({
    date: String,
    deals: Array,
    amount: Number
})

Deal = mongoose.model('Deal', dealSchema)

async function checkDealExistence(deal) {

    let search = {}
    search.date = new Date().toDateString()

    let currentDay = await Deal.findOne(search)

    if (currentDay && currentDay['deals']) {
        let allDeals = currentDay['deals']

        for (var i in allDeals) {
            if (deal.id == allDeals[i]['id']) return true
        }
    }
    return false 
}

async function createDeals(deal, user) {

    let search = {}
    search.date = new Date().toDateString()

    let currentDay = await Deal.findOne(search)

    if (currentDay) {

        let deals = currentDay.deals
        let amount = 0

        for (var i in deals) {
            amount += deals[i]['value']
        }
        amount += deal.value
        await Deal.updateOne(search, {
            $push: {
                'deals': deal
            },
            $set: {
                'amount': amount
            }
        })
    } else {

        let data = {}

        data.amount = deal.value
        data.date = new Date().toDateString()
        data.deals = [deal]


        try {

            await Deal.create(data)
        } catch (error) {
            Hermodr.error(local, error)
        }

    }

}

module.exports = {
    checkDealExistence,
    createDeals
}