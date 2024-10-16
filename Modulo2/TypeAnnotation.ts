let nome:string = "Thiago";
let colecaoNumeros:number[] = [1,2,3];
let outroNumero:number = 6;
const vetor2 = incluirNumeros(colecaoNumeros,outroNumero);
console.log(...vetor2);
function incluirNumeros(vetor:number[], numero:number):number[]{
    vetor.push(numero);
    return vetor;
}

//Objeto
let carro:{
    nome:string ;
    ano:number;
    preco:number,

} = {
        nome:"Toyota",
        ano:2005,
        preco:50000
    } 