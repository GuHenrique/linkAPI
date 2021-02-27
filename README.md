# linkAPI

## OBJETIVO
construir uma API RESTful usando a tecnologia NodeJS.

## REQUISITOS

- [x] Criar contas testes nas plataformas Pipedrive e Bling.

- [x] Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

- [x] Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça

- [x] Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

- [x] Criar endpoint para trazer os dados consolidados da collection do MongoDB.


## Documentação das Apis

- [Pipedrive](https://developers.pipedrive.com/docs/api/v1/) 
- [Bling](https://ajuda.bling.com.br/hc/pt-br/categories/360002186394-API-para-Desenvolvedores)


## Como executar
Após efetuar o download do projeto

Executar o comando abaixo dentro da pasta "kapi"
caminho: linkapi/kapi
``
npm install
``

Executar o comando abaixo dentro do projeto raiz
caminho: linkapi
``
docker-compose up -d
``


## Observações

- O serviço executa é executado automaticamente a cada 1 minuto porém pode ser alterado no arquivo .env (pasta kapi)

- É necessário configurar a os tokens do pipedrive e bling, além do dominio do Pipedrive no arquivo .end (pasta kapi)

- A rota para obter os dados consolidados é a http://localhost:3000/kapi/v1/deals para efetuar uma busca por data especifica passar o parametro date com a data em formato ISO como no exemplo a seguir http://localhost:3000/kapi/v1/deals?date=2021-02-25