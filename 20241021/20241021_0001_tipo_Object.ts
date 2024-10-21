//Exemplo 1
export  {};
const pessoa1 = {
    "nome": "Thiago",
    "sobrenome":"Barroso",
    "idade":40,
    "funcao":"Analista de Tecnologia"

}

//console.log(pessoa);
//console.log(JSON.stringify(pessoa));
//console.log(JSON.parse(JSON.stringify(pessoa)));

//Exemplo 2: Parâmetro de função

const imprimePessoa = (pessoa:{nome:string,sobrenome:string,idade:number,funcao:string}) =>{
    console.log(`Olá, meu nome é ${pessoa.nome} ${pessoa.sobrenome}. Eu tenho ${pessoa.idade} anos e sou ${pessoa.funcao} no Serpro`);
}

imprimePessoa(pessoa1);

//Exemplo03: Object Nomeado:
interface Pessoa {
    nome:string,
    sobrenome:string,
    idade:number,
    funcao:string
}

const imprimePessoaInterface = (pessoa:Pessoa):string =>{
    return `Olá, meu nome é ${pessoa.nome} ${pessoa.sobrenome}. Eu tenho ${pessoa.idade} anos e sou ${pessoa.funcao} no Serpro Interface`
}

console.log(imprimePessoaInterface(pessoa1));

//Exemplo 4: Object com type alias

type Pessoa04 = {
    nome:string,
    sobrenome:string,
    idade:number,
    funcao:string
}

const pessoaType:Pessoa04 = {
    "nome": "Thiago",
    "sobrenome":"Barroso",
    "idade":40,
    "funcao":"Analista de Tecnologia"
}

const imprimePessoaType = (pessoa:Pessoa04):string =>{
    return `Olá, meu nome é ${pessoa.nome} ${pessoa.sobrenome}. Eu tenho ${pessoa.idade} anos e sou ${pessoa.funcao} no Serpro Type`
}

console.log(imprimePessoaType(pessoaType));


//Exemplo 05 =  Optional no object

interface Pessoa05 {
    nome:string,
    funcao:string,
    linguagem?:string
}

const pessoaInterfaceOptional:Pessoa05 = {
    "nome": "Thiago",
    "funcao":"Analista de Tecnologia"
}

const imprimePessoaInterfaceOptional = (pessoa:Pessoa05):string =>{
    return `Olá, meu nome é ${pessoa.nome}.Eu sou ${pessoa.funcao} no Serpro e programo na linguagem ${pessoa.linguagem} Type`
}

console.log(imprimePessoaInterfaceOptional(pessoaInterfaceOptional));

//Exemplo06: Propriedade "readonly"

interface PessoaReadOnly {
    nome:string,
    funcao:string,
    readonly linguagem:string
}

const pessoaInterfaceReadOnly:PessoaReadOnly = {
    "nome": "Thiago",
    "funcao":"Analista de Tecnologia",
    "linguagem":"Typescript"
}

const imprimePessoaInterfaceReadOnly = (pessoa:PessoaReadOnly):string =>{
    return `Olá, meu nome é ${pessoa.nome}.Eu sou ${pessoa.funcao} no Serpro e programo na linguagem ${pessoa.linguagem} Type`
}

//pessoaInterfaceReadOnly.linguagem = "Javascript" => Retorna erro
console.log(imprimePessoaInterfaceReadOnly(pessoaInterfaceReadOnly));