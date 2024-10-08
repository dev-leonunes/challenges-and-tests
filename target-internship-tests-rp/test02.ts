// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula,
// além de informar a quantidade de vezes em que ela ocorre.

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente
// definida no código;

import * as rl from "readline-sync";

const word = rl.question('Digite uma palavra: ');

const wordArray = word.trim().split('');

let count = 0;
for (let letter of wordArray) {
    if (letter === 'a' || letter === 'A') {
        count++
    }
}

console.log(`A letra 'a' ou 'A' aparecem ${count} vezes na palavra ${word}!`);