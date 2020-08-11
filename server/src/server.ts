import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//rota - endereço da aplicação

/*
    http://localhost:3333/users
    http://localhost:3333/contacts
*/

//recurso

/*
    /users
    /contacts
*/

//Métodos HTTP

/*
    GET - buscar ou listar uma informação
    POST - criar alguma informação
    PUT - atualizar uma informação existente
    DELETE - apagar uma informação existente
*/

/*app.get('/users', (request, response) => {
    const users = [
        {name: 'Erick', age: 20},
        {name: 'Fulano', age: 30},
        {name: 'Pedro', age: 40}
    ]

    //return response.send("Hello World");
    return response.json(users);
});


//Corpo (request body): dados para criação ou atualização de um registro
//Query params - Paginação, filtros, ordenação

app.post('/usersp', (request, response) => {
    console.log(request.body);

    const users = [
        {name: 'Erick', age: 20},
        {name: 'Fulano', age: 30},
        {name: 'Pedro', age: 40}
    ]

    //return response.send("Hello World");
    return response.json(users);
});

//Route params - identificar qual recurso quero atualizar ou deletar
app.delete('/usersd/:id', (request, response) => {
    console.log(request.params);

    const users = [
        {name: 'Erick', age: 20},
        {name: 'Fulano', age: 30},
        {name: 'Pedro', age: 40}
    ]

    //return response.send("Hello World");
    return response.json(users);
});
app.listen(3333);

app.get('/usersq', (request, response) => {
    console.log(request.query);

    const users = [
        {name: 'Erick', age: 20},
        {name: 'Fulano', age: 30},
        {name: 'Pedro', age: 40}
    ]

    //return response.send("Hello World");
    return response.json(users);
});*/

/*app.get('/', (request, response) => {
    return response.json({message: "Hello World"});
})*/

