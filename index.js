const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Rota esta funcionando')
})

let listaPedidos = [
    {
        "id":1,
        "cliente":"Victor Chinaglia",
        "codCliente":100,
        "produto":"X-Banco",
        "valor":29.9
    },
    {
        "id":2,
        "cliente":"Victor Chinaglia",
        "codCliente":100,
        "produto":"X-Salada",
        "valor":25.9
    },
    {
        "id":3,
        "cliente":"Pedrão do Grau",
        "codCliente":101,
        "produto":"X-Tudo",
        "valor":39.9
    }
]

//Listar todos os pedidos
app.get('/pedidos', (req, res)=>{
    res.send(listaPedidos)
})

//Listar um pedido
app.get('/pedidos/:id', (req, res)=>{
    let id = req.params.id
    if(id > listaPedidos.length){
        res.send('Pedido invalido')
    }else{
        res.send(listaPedidos[id - 1])
    }
})

app.listen(3000)