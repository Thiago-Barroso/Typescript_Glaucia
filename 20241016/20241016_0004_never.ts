/*
    Tipo never: Não contém valores. 
                Não pode ser atribuido.
                Retorno de função que gera erro.
                Função com loop infinito possui tipo de retorno never
*/

function error(message:string):never{
    throw new Error(message);
}

console.log(error("Erro de mensagem"));