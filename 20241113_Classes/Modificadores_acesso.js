//public, private, protected, readonly
//Padrão: public.
//private: metodos ou propriedades acessíveis apenas dentro da classe.
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
var animal = /** @class */ (function () {
    function animal(especie, raca, som, idade) {
        this.especie = especie;
        this.raca = raca;
        this.som = som;
        this.idade = idade;
    }
    animal.prototype.emitirSom = function () {
        console.log(this.som);
    };
    return animal;
}());
var cachorro = new animal("cachorro", "caramelo", "Auau", NaN);
//console.log(cachorro.som); O atributo som é private.
cachorro.emitirSom();
//Protected: Somente a classe ou as herdeiras podem acessar.
var ave = /** @class */ (function () {
    function ave(especie, voa, canto, eAve) {
        this.especie = especie;
        this.voa = voa;
        this.canto = canto;
        this.eAve = eAve;
    }
    ave.prototype.listaInformacoes = function () {
        console.log("A ave \u00E9 da especie ".concat(this.especie, ", voa? ").concat(this.voa, ", o canto \u00E9 ").concat(this.canto, ", \u00E9 uma ave? ").concat(this.eAve));
    };
    return ave;
}());
var passaro = /** @class */ (function (_super) {
    __extends(passaro, _super);
    function passaro(especie, voa, canto, eAve) {
        var _this = _super.call(this, especie, voa, canto, true) || this;
        _this.som = "Fuifufiufufiu";
        _this.eAve = true;
        return _this;
    }
    return passaro;
}(ave));
var calopsita = new passaro("Calopsita Cagona", true, "Fuifufiufufiu", true);
calopsita.listaInformacoes();
