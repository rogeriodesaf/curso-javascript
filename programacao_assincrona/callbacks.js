console.log('ainda não executou o callback');

setTimeout(function(){
    console.log("Executou o callback")
}, 2000);

console.log("ainda não executou o callback");