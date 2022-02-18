let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click a todos as caixas
for (let i = 0; i < boxes.length; i++) {

    // quando há o click na caixa
    boxes[i].addEventListener("click", function () {

        let el = checkEl(player1, player2);

        // verificando se ja tem um elemento
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // computa a jogada
            if (player1 == player2) {
                player1++;
            } else {
                player2++;
            }

            checkWinCondition();

        }

    });

}

function checkEl(player1, player2) {

    if (player1 == player2) {
        el = x;
    } else {
        el = o;
    }

    return el;
}

function checkWinCondition() {

    let b1 = document.getElementById('block-1');
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');
  
    // horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
  
      let b1Child = b1.childNodes[0].className;
      let b2Child = b2.childNodes[0].className;
      let b3Child = b3.childNodes[0].className;
  
      if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
        declareWinner('x');
      } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
        declareWinner('o');
      }
  
    }
}