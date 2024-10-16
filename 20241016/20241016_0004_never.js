/*
    Tipo never: Não contém valores.
                Não pode ser atribuido.
                Retorno de função que gera erro.
*/
function error(message) {
    throw new Error(message);
}
console.log(error("Erro de mensagem"));
