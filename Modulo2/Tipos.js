"use strict";
let v_ou_f = true;
//Boolean(object) != boolean(primitivo)
//Number != number
while (v_ou_f) {
    console.log("Verdadeiro ou falso?");
    v_ou_f = false;
}
let numero = 1788258.53;
//let inteiroGrande:bigint = 8527412n apenas es2020 ou superior
let inteiroGrande = 8527412n;
let vetor = [1, 2, 3, "Quatro", "Cinco"];
//console.log(vetor);
//console.log(...vetor);  
let objeto = ["Banana", 78, "abacaxi"];
//console.log(objeto);
//console.log(...objeto);
//console.log(typeof vetor)
//console.log(typeof(objeto));
objeto.push(...vetor);
console.log(objeto);
