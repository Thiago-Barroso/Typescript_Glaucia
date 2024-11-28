//Exemplo 1: Classe com construtor

class Pessoa {
    nome: string;
    sobreNome: string;

    constructor(nome:string,sobreNome:string){
        this.nome = nome;
        this.sobreNome = sobreNome;
    }
    nomeCompleto():string{
        return `${this.nome} ${this.sobreNome}`;
    }
}
const pessoa1 = new Pessoa("Thiago","Barroso");
console.log(pessoa1.nomeCompleto());    

//Exemplo 2: Classe sem construtor

class Estudante {
    codigoEstudante: number | undefined;
    nomeEstudante!: string;
}

const estudante1 = new Estudante;
estudante1.codigoEstudante = 100101100;
estudante1.nomeEstudante = "Marquim dos Trovão";
console.log(`O código do estudante ${estudante1.nomeEstudante} é ${estudante1.codigoEstudante}`);

class Estudante1 extends Estudante {
    constructor(codigoEstudante:number,nomeEstudante:string){
        super();
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }

    dadosEstudante(){
        return `O código do estudante ${this.nomeEstudante} é ${this.codigoEstudante}`
    }
}

const novoEstudante =new Estudante1(1010010011,"Cheff");
console.log(novoEstudante.dadosEstudante());
