window.addEventListener('keydown', function(e){
    if(e.key == 'q'){
        console.log('apertou a tecla q')
    } else if (e.key == 'Enter'){
        console.log('Apertou a tecla Enter')
    }
});

window.addEventListener('keyup', function(e){
    if(e.key == 'Enter'){
        console.log('Soltou a tecla')
    }
});
