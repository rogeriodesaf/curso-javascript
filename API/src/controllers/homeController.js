exports.paginaInicial = (req, res) => {
   res.render('index')
}

exports.postdaHome = (req, res) => {
   res.send('Esse é o post da Home');
};

