export {};

//type
/*
type nomeCompleto = {
    nome: string,
    sobreNome:string,
    nomeDoMeio:string
}


const euMesmo:nomeCompleto = {
    nome: "Thiago",
    nomeDoMeio: "Barroso",
    sobreNome:"Maciel"
}



function imprimeNome(nome:nomeCompleto):void {
    console.log(`Nome: ${nome.nome}, Nome do Meio:${nome.nomeDoMeio}, Sobrenome:${nome.sobreNome} `);
}

imprimeNome(euMesmo);
*/

//Interface

type operador = |"+" |"-"|"*"|"/"

interface operacaoAritmetica {
    operando1:number,
    operando2:number,
    operador:operador
}



const valorOperacao = (operacao:operacaoAritmetica):number =>{
    return eval(String(operacao.operando1) + operacao.operador + operacao.operando2)
}

console.log(valorOperacao({operando1:4,operando2:5,operador:"*"}))

const vetorOperacoes=Array<operacaoAritmetica>;

function retornarAlgo<T>(entrada:T):T {
    return entrada;
}

console.log(retornarAlgo("Função com entrada genérica!"))