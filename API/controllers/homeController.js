exports.paginaInicial = (req, res) => {
   res.send(`<form action="/" method="POST"><br>
   <button>Olá mundo</button>"
   </form>
   `)
}

exports.postdaHome = (req, res) => {
   res.send('Esse é o post da Home');
};
