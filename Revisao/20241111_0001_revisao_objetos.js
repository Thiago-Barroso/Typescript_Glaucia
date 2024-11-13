"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var valorOperacao = function (operacao) {
    return eval(String(operacao.operando1) + operacao.operador + operacao.operando2);
};
console.log(valorOperacao({ operando1: 4, operando2: 5, operador: "*" }));
var vetorOperacoes = (Array);
function retornarAlgo(entrada) {
    return entrada;
}
console.log(retornarAlgo("Função com entrada genérica!"));
