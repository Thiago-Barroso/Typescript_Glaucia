"use strict";
//Tipos de Enums: Numeric e String
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
var Idioma2;
(function (Idioma2) {
    Idioma2["Portugues"] = "PT-BR";
    Idioma2["Espanhol"] = "ES";
    Idioma2["Ingles"] = "EN";
    Idioma2["Frances"] = "FR";
})(Idioma2 || (Idioma2 = {}));
console.log(Idioma2);
console.log(Idioma2.Portugues);
console.log(Idioma.Ingles);
function comida(c) {
    return "Comidas muito apetitosas!";
}
;
console.log(comida(3 /* Comida.Churrasco */));
