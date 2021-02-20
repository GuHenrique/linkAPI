/*
    275.462.280-26
    workhard1
    qwert123
*/

const axios = require('axios')
let token = process.env.BLING_TOKEN
let local = 'kapi/apps/bling/bling.js'

let url = `https://bling.com.br/Api/v2/contatos/json/&apikey=${token}`
//https://bling.com.br/Api/v2/pedidos/json/&apikey=
//https://ajuda.bling.com.br/hc/pt-br/articles/360046424094-GET-pedidos
//https://ajuda.bling.com.br/hc/pt-br/articles/360046378234-GET-contato-identificador-
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