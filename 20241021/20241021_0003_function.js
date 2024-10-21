"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Função com nome
function testeConverte(numero) {
    var numeroTesteEscopo = numero;
    if (isNaN(Number(numeroTesteEscopo))) {
        return -1;
    }
    return Number(numeroTesteEscopo);
}
console.log(testeConverte("Abacate"));
//Arrow function com nome
var testeConverte2 = function (numero) {
    var numeroTesteEscopo2 = numero;
    if (isNaN(Number(numeroTesteEscopo2))) {
        return -1;
    }
    return Number(numeroTesteEscopo2);
};
console.log(testeConverte2("123.456"));
//console.log(numeroTesteEscopo2);
//Arrow Function anônima
(function () { return console.log("Arrow Function Sem Nome"); })();
//Function Anônima
(function () {
    console.log("Função sem nome!");
})();
var numeros = [9, 5, 4, 6, 8, 1, 7, 3, 12, 10, 11];
console.log(numeros.sort());
console.log(numeros.sort(function (a, b) { return a - b; }));
//Function Constructor
var saudar = new Function("Mensagem", 'return "Fala, " + Mensagem');
console.log(saudar("Pessoal"));
