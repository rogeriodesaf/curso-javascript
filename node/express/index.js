let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('Primeira aplicação com Express');
});


app.get('/teste', function(req, res){
    res.send('Segunda aplicação')
})
app.listen(3000, function(){
    console.log('escuntado na porta 3000');
});