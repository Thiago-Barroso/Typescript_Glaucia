let tupla: [number,string,string];
tupla = [15,"nada","nenhum"];
tupla = [18,"Babaca","chimbinha"];
//console.log(tupla);
//console.log(...tupla);
let casa:typeof tupla = [1,"5","7"] 

for (let tu of tupla){
    console.log(tu);
}
console.log(tupla[1]);


//Labelled Tuples
let pessoa:[nome:string,posicao:string,idade:number] = ["Thiago", "Desenvolvedor", 40];

//spread operator
let listaFrutas:[string,...string[]] = ["banana","abacaxi","pera","maçã"];
console.log(listaFrutas);
console.log(...listaFrutas);

//Tupla Heterogênea
let listaProfissoes: [number, boolean, ...string[]] = [18,false,"programador","engenheiro"];
listaProfissoes = [45, true,"encanador","professor","vendedor"];
console.log(typeof listaProfissoes);

//labeled tuples com spread operators em uma função
type Nome = |[primeiroNome:string, sobreNome:string] 
            |[primeiroNome:string, nomeMeio:string, sobreNome:string];

function criarPessoa(...nome:Nome){
    return [...nome];
}

console.log(criarPessoa("Thiago","Barroso"));
console.log(criarPessoa("Thiago","Barroso","Maciel"));

