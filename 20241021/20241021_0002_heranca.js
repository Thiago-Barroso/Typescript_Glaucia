var filho = {
    nome: "Thiago",
    sobrenomeMae: "Barroso",
    sobrenomePai: "Maciel",
    idade: 40
};
var animal1 = {
    tipo: "Cao",
};
var usuario = {
    nome: "Thiago Barroso",
    email: "thiago@algumacoisa.com"
};
var admin = {
    nome: "João da Silva",
    email: "js_administrador@algumacoisa.com",
    admin: true,
};
/*
function acessarSistema(usuario:Usuario):Usuario{
    return usuario
}
*/
function acessarSistemaGenerics(usuario) {
    return usuario;
}
console.log(acessarSistemaGenerics(usuario));
console.log(acessarSistemaGenerics(admin));
console.log(acessarSistemaGenerics(filho));
console.log(acessarSistemaGenerics("texto"));
