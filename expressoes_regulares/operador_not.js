const notAeB = /[^ab]/;
console.log(notAeB.test('3213')); //true

const notAaZ = /[^a-z]/;
console.log(notAaZ.test('sdsd 12'))// só dará false se contiver apenas letras;