"use strict";
let nome = "Thiago";
let colecaoNumeros = [1, 2, 3];
let outroNumero = 6;
const vetor2 = incluirNumeros(colecaoNumeros, outroNumero);
console.log(...vetor2);
function incluirNumeros(vetor, numero) {
    vetor.push(numero);
    return vetor;
}
//Objeto
let carro = {
    nome: "Toyota",
    ano: 2005,
    preco: 50000
};
