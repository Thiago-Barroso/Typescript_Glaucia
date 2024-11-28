//Exemplo 1: Classe com construtor
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }
    Pessoa.prototype.nomeCompleto = function () {
        return "".concat(this.nome, " ").concat(this.sobreNome);
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa("Thiago", "Barroso");
console.log(pessoa1.nomeCompleto());
//Exemplo 2: Classe sem construtor
var Estudante = /** @class */ (function () {
    function Estudante() {
    }
    return Estudante;
}());
var estudante1 = new Estudante;
estudante1.codigoEstudante = 100101100;
estudante1.nomeEstudante = "Marquim dos Trovão";
console.log("O c\u00F3digo do estudante ".concat(estudante1.nomeEstudante, " \u00E9 ").concat(estudante1.codigoEstudante));
var Estudante1 = /** @class */ (function (_super) {
    __extends(Estudante1, _super);
    function Estudante1(codigoEstudante, nomeEstudante) {
        var _this = _super.call(this) || this;
        _this.codigoEstudante = codigoEstudante;
        _this.nomeEstudante = nomeEstudante;
        return _this;
    }
    Estudante1.prototype.dadosEstudante = function () {
        return "O c\u00F3digo do estudante ".concat(this.nomeEstudante, " \u00E9 ").concat(this.codigoEstudante);
    };
    return Estudante1;
}(Estudante));
var novoEstudante = new Estudante1(1010010011, "Cheff");
console.log(novoEstudante.dadosEstudante());
