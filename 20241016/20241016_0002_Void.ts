(function escreveTexto(texto:string):void{
    console.log(texto);
})("Olá!");

((texto:string):void=>{
    console.log(texto);
})("Olá, só que com arrow function"); 


((numero:number):void=>{
    console.log(numero.toFixed(2));
})(3.14151692); 