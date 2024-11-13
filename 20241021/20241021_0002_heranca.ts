interface Mae {
    nome: string,
    sobrenomeMae: string
}

interface Pai {
    nome: string,
    sobrenomePai:string
}

interface Filho extends Mae , Pai {
    idade:number

}

const filho:Filho = {
    nome: "Thiago",
    sobrenomeMae: "Barroso",
    sobrenomePai: "Maciel",
    idade:40
}

//Animais

interface Gato {
    tipo:string,
    miado:string;
}

interface Cao {
    tipo:string,
    latido:string

}

type Animal = Cao & Gato;

const animal1:Animal = {
    tipo: "Cao",
    miado:"miau",
    latido:"Auau"
}


//Generics

type Usuario = {
    nome: string,
    email: string
}

type Admin = {
    nome:string,
    email:string,
    admin:true
}

const usuario: Usuario = {
    nome:"Thiago Barroso",
    email:"thiago@algumacoisa.com"
}

const admin: Admin =  {
    nome:"João da Silva",
    email:"js_administrador@algumacoisa.com",
    admin:true,
}

/*
function acessarSistema(usuario:Usuario):Usuario{
    return usuario
}
*/

function acessarSistemaGenerics<T>(usuario:T):T{
    return usuario
}


console.log(acessarSistemaGenerics<Usuario>(usuario));
console.log(acessarSistemaGenerics<Admin>(admin));
console.log(acessarSistemaGenerics<Filho>(filho))
console.log(acessarSistemaGenerics("texto"))