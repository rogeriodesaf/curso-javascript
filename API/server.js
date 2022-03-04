const express = require('express');
const app = express();
const route = require('./routes')
const path  = require('path');




app.use(route);
app.set('views', path.resolve(__dirname, 'src' , 'views'));
app.set('view engine', 'ejs');

app.listen(5000, function(){
    console.log('Escutando na porta 5000');
});