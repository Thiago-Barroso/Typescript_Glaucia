//export {};
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa.prototype.nomeCompleto = function () {
    return "".concat(this.nome, " ").concat(this.sobrenome);
};
var pessoa1 = new Pessoa('Thiago', 'Barroso');
console.log(pessoa1.nomeCompleto());
