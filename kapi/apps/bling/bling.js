const axios = require('axios')
let token = process.env.BLING_TOKEN
let local = 'kapi/apps/bling/bling.js'
var jsontoxml = require('jsontoxml')
let url = `https://bling.com.br/Api/v2/pedido/json`

async function postDeal(deal) {

    let data
    let xml = await jsontoxml(deal)

    await axios({
        method: 'POST',
        url: url,
        params: {
            apikey: token,
            xml: xml
        }
    }).then(function (response) {

        if (response.data.retorno && response.data.retorno.erros) {
            Hermodr.error(local, JSON.stringify(response.data.retorno.erros))
            data = false;
        } else {
            data = response.data.retorno.contatos
        }
    }).catch((error) => {

        Hermodr.error(local, error)
    })

    return data
}

module.exports = {
    postDeal
}