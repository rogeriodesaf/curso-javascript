//window.addEventListener('load', ()=>{
//    alert('Assine os termos de uso')
//});

window.addEventListener('beforeunload', function(event){
     event.returnValue = null ;
});