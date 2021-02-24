/*
    275.462.280-26
    workhard1
    qwert123
*/

const axios = require('axios')
let token = process.env.BLING_TOKEN
let local = 'kapi/apps/bling/bling.js'
var jsontoxml = require('jsontoxml')
let url = `https://bling.com.br/Api/v2/pedido/json`
          

async function postDeal(deal){

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

            if(response.data.retorno && response.data.retorno.erros) {
                console.log(response)
                Hermodr.error(local, JSON.stringify(response.data.retorno.erros))
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
    postDeal: postDeal
}