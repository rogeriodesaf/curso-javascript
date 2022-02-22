let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('Primeira aplicação com Express');
});

app.listen(4000, function(){
    console.log('escuntado na porta 4000');
});