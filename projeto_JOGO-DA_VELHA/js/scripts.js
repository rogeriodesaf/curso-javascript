let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//adicionando os eventos de click  aos boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {
        
        let el ;
        if (player1 == player2) {
            el = x;
            player1++;
        } else {
            el = o;
            player2++;
        }
        //verifica se já tem x ou o
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
        }

    });
}
