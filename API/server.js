const express = require('express');
const app = express();
const route = require('./routes')


app.use(route);

app.listen(5000, function(){
    console.log('Escutando na porta 5000');
});