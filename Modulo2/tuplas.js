"use strict";
let tupla;
tupla = [15, "nada", "nenhum"];
tupla = [18, "Babaca", "chimbinha"];
//console.log(tupla);
//console.log(...tupla);
let casa = [1, "5", "7"];
for (let tu of tupla) {
    console.log(tu);
}
console.log(tupla[1]);
//Labelled Tuples
let pessoa = ["Thiago", "Desenvolvedor", 40];
//spread operator
let listaFrutas = ["banana", "abacaxi", "pera", "maçã"];
console.log(listaFrutas);
console.log(...listaFrutas);
//Tupla Heterogênea
let listaProfissoes = [18, false, "programador", "engenheiro"];
listaProfissoes = [45, true, "encanador", "professor", "vendedor"];
console.log(typeof listaProfissoes);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa("Thiago", "Barroso"));
console.log(criarPessoa("Thiago", "Barroso", "Maciel"));
