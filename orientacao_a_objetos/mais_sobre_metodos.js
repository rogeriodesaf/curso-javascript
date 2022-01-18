const dados = {
    nome: "Rogério",
    setHobbie: function (hobbie) {
        return this.hobbie = hobbie
    },
    getHobbie : function (){
        return 'O hobbie é '+ this.hobbie;
    }
}
console.log(dados.setHobbie('desenho'));
console.log(dados.getHobbie());