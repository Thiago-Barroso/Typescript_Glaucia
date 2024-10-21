"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa1 = {
    "nome": "Thiago",
    "sobrenome": "Barroso",
    "idade": 40,
    "funcao": "Analista de Tecnologia"
};
//console.log(pessoa);
//console.log(JSON.stringify(pessoa));
//console.log(JSON.parse(JSON.stringify(pessoa)));
//Exemplo 2: Parâmetro de função
var imprimePessoa = function (pessoa) {
    console.log("Ol\u00E1, meu nome \u00E9 ".concat(pessoa.nome, " ").concat(pessoa.sobrenome, ". Eu tenho ").concat(pessoa.idade, " anos e sou ").concat(pessoa.funcao, " no Serpro"));
};
imprimePessoa(pessoa1);
var imprimePessoaInterface = function (pessoa) {
    return "Ol\u00E1, meu nome \u00E9 ".concat(pessoa.nome, " ").concat(pessoa.sobrenome, ". Eu tenho ").concat(pessoa.idade, " anos e sou ").concat(pessoa.funcao, " no Serpro Interface");
};
console.log(imprimePessoaInterface(pessoa1));
var pessoaType = {
    "nome": "Thiago",
    "sobrenome": "Barroso",
    "idade": 40,
    "funcao": "Analista de Tecnologia"
};
var imprimePessoaType = function (pessoa) {
    return "Ol\u00E1, meu nome \u00E9 ".concat(pessoa.nome, " ").concat(pessoa.sobrenome, ". Eu tenho ").concat(pessoa.idade, " anos e sou ").concat(pessoa.funcao, " no Serpro Type");
};
console.log(imprimePessoaType(pessoaType));
var pessoaInterfaceOptional = {
    "nome": "Thiago",
    "funcao": "Analista de Tecnologia"
};
var imprimePessoaInterfaceOptional = function (pessoa) {
    return "Ol\u00E1, meu nome \u00E9 ".concat(pessoa.nome, ".Eu sou ").concat(pessoa.funcao, " no Serpro e programo na linguagem ").concat(pessoa.linguagem, " Type");
};
console.log(imprimePessoaInterfaceOptional(pessoaInterfaceOptional));
