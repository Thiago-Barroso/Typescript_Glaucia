export {};
//Função com nome
function testeConverte(numero:string):number{
    const numeroTesteEscopo = numero
    if(isNaN(Number(numeroTesteEscopo))){
        return -1
    }
    return Number(numeroTesteEscopo);
}

console.log(testeConverte("Abacate"));

//Arrow function com nome
const testeConverte2 = (numero:string):number =>{
    let numeroTesteEscopo2 = numero
    if(isNaN(Number(numeroTesteEscopo2))){
        return -1
    }
    return Number(numeroTesteEscopo2);
}

console.log(testeConverte2("123.456"));
//console.log(numeroTesteEscopo2);

//Arrow Function anônima
(() => console.log("Arrow Function Sem Nome"))();

//Function Anônima
(function(){
    console.log("Função sem nome!")
})();

const numeros: Array<number> = [9,5,4,6,8,1,7,3,12,10,11];
console.log(numeros.sort());
console.log(numeros.sort((a,b) => a - b));

//Function Constructor
const saudar = new Function("Mensagem",'return "Fala, " + Mensagem');
console.log(saudar("Pessoal"));


//Rest Parameter

function somarNumeros(...numeros:number[]){
    let soma:number = 0;
    for(numero of numeros){
        soma += numero;
    }
    return soma;
}


