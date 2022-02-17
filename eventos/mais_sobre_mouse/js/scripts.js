let btn1 = document.querySelector('#btn1');

btn1.addEventListener('mousedown', function(){
    console.log('Apertou o mouse')
});

btn1.addEventListener('mouseup', function(){
    console.log('soltou o botão')
});

btn2.addEventListener('dblclick', ()=>console.log('clicou duas vezes'));