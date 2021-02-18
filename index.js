
const { request } = require('express');
const { readFile} = require('fs').promises;
const express = require ('express');

const app = express();

// request is users incoming data
// respose is your outgoing data

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))
