const bling = require('../../apps/bling/bling')
let local = 'kapi/domain/models/contact.js'

async function createContact(person, company) {

    let contact = {}
    let data
    let personType

    if (person) {

        data = person
        personType = 'F'
    } else {
        
        data = company
        personType = 'J'
    }

    contact.nome = data.name
    contact.tipoPessoa = personType
    contact.contribuinte = 9
    contact.codigo = data.value
    
    if(data['email'] && data['email'][0]['value'] != "") contact.email = data['email'][0]['value']
    if(data['phone'] && data['phone'][0]['value'] != "") contact.celular = data['phone'][0]['value']

        return contact
}


module.exports = {
    createContact
}