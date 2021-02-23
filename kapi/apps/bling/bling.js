/*
    275.462.280-26
    workhard1
    qwert123
*/

const axios = require('axios')
let token = process.env.BLING_TOKEN
let local = 'kapi/apps/bling/bling.js'
var jsontoxml = require('jsontoxml')
let url = `https://bling.com.br/Api/v2/contatos/`
          
//https://bling.com.br/Api/v2/pedidos/json/&apikey=
//https://ajuda.bling.com.br/hc/pt-br/articles/360046378234-GET-contato-identificador-

async function getContacts() {

    var data

    await axios({
            method: 'GET',
            url: url+`/json/&apikey=${token}`
        })
        .then(function (response) {

            data = response.data.retorno.contatos
        })

    return data
}

async function postContact(contato) {

    let data
    let xml = await jsontoxml({contato})
    url = `https://bling.com.br/Api/v2/contato/json`
    await axios({
            method: 'POST',
            url: url,
            params: {
                apikey: token,
                xml: xml
              }
        }).then(function (response) {

            if(response.data.retorno && response.data.retorno.erros) {
                Hermodr.error(local, response.data.retorno.erros)
                data = false;
            }else{
                data = response.data.retorno.contatos
            }
        }).catch((error) => {
            Hermodr.error(local, error)
        })

    return data

}

async function postDeal(deal){

    let data
    let xml = await jsontoxml(deal)
    url = `https://bling.com.br/Api/v2/pedido/json`
    await axios({
            method: 'POST',
            url: url,
            params: {
                apikey: token,
                xml: xml
              }
        }).then(function (response) {

            if(response.data.retorno && response.data.retorno.erros) {
                Hermodr.error(local, response.data.retorno.erros)
                data = false;
            }else{
                data = response.data.retorno.contatos
            }
        }).catch((error) => {
            Hermodr.error(local, error)
        })

    return data

}

module.exports = {
    getContacts: getContacts,
    postContact: postContact,
    postDeal: postDeal
}