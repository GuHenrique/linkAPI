const bling = require('../../apps/bling/bling')
const { getContact } = require('../../apps/pipedrive/pipedrive')
let local = 'kapi/domain/models/contact.js'

async function checkContactExistence(contact) {
    let contacts = await bling.getContacts()
    
    for (var i in contacts) {
        
        if (contacts[i]['contato']['codigo'] == contact.value) {
            if (contact.name == contacts[i]['contato']['nome']) return contact[i]['contato']
        }
    }

    return false
}

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
    contact.codigo - data.value

    try {
        console.log('teste')
        contact.cpf_cnpj = await getContact(data.value)
        return await bling.postContact(contact)

    } catch (error) {
        Hermodr.error(local, error)
    }
}


module.exports = {
    checkContactExistence,
    createContact
}