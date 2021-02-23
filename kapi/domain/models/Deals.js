const mongoose = require('mongoose')
const { postDeal } = require('../../apps/bling/bling')
const { getWonDealsByDate } = require('../../apps/pipedrive/pipedrive')
const { checkContactExistence, createContact } = require('./Contact')
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


    let blingDeal = {
        pedido: {
            cliente:{},
            transporte:{
                volumes:{
                    volume:{
                        servico: 'servico vendido'
                    }
                }
            },
            itens:{
                descricao:'Item',
                qtde: 1,
                vlr_unit: deal.value
            },
            parcelas:{
                parcela: {
                    vlr: deal.value
                }
            }
        }
    }
    blingDeal.pedido.cliente = user

    try {
        await postDeal(blingDeal)
    } catch (error) {
        Hermodr.error(error)
    }


}


async function prepareOpportunity() {

    let deals = await getWonDealsByDate()

    if(deals && deals.success && deals.success == false) return deals
    
    for (var i in deals) {

        if(new Date().toDateString() != new Date(deals[i]['won_time']).toDateString()) return
        if (await checkDealExistence(deals[i])) continue
        
        let contact = await checkContactExistence(deals[i]['person_id'] || deals[i]['org_id'])
        if (!contact) contact = await createContact(deals[i]['person_id'], deals[i]['org_id'])
        if(contact == false) return

        try {
            
            await createDeals(deals[i],contact)
        } catch (error) {
            Hermodr.error(error)
        }
        
    }
}


module.exports = {
    checkDealExistence,
    createDeals,
    prepareOpportunity
}