const tempo:number = 10;
const eFalso:boolean = false;
const palavra:string = "Alguma palavra"
console.log(tempo);
console.log(eFalso);
console.log(palavra);

const numeros:Array<number> = [1,2,3];
type endereco = |[rua:string,numero:number,bairro:string]
                |[rua:string,numero:number,apartamento:number,bairro:string]
function meuEnd(end:endereco){
    return [...end] ;
}

console.log(meuEnd(["Rua apolo",177,"Caiçara"]));
console.log(meuEnd(["Rua apolo",177,203,"Caiçara"]));

enum minhaC{
    sala = "Sala",
    cozinha = "Cozinha",
    quarto = "Quarto",
    banheiro = "Banheiro"
}

console.log(minhaC.banheiro);

