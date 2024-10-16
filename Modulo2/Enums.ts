//Tipos de Enums: Numeric e String
enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances
}

console.log(Idioma);

enum Idioma2 {
    Portugues = "PT-BR",
    Espanhol = "ES",
    Ingles = "EN",
    Frances = "FR"
}

console.log(Idioma2);
console.log(Idioma2.Portugues);
console.log(Idioma.Ingles)

const enum Comida{
    Hamburguer,
    Massa,
    Torta,
    Churrasco
}

function comida(c:Comida){
    return "Comidas muito apetitosas!"
};

console.log(comida(Comida.Churrasco));

