//public, private, protected, readonly
//Padrão: public.
//private: metodos ou propriedades acessíveis apenas dentro da classe.

class animal {
    private especie:string;
    private raca!:string;
    private som!:string;
    idade:number;

    constructor(especie:string,raca:string,som:string,idade:number){
        this.especie = especie;
        this.raca = raca;
        this.som = som;
        this.idade = idade;
    }

    emitirSom(){
        console.log(this.som);
    }
    
}

const cachorro = new animal("cachorro","caramelo","Auau",NaN);
//console.log(cachorro.som); O atributo som é private.
cachorro.emitirSom();

//Protected: Somente a classe ou as herdeiras podem acessar.

class ave {
    protected especie:string;
    private voa: boolean;
    protected canto: string;
    protected eAve:boolean;
    listaInformacoes(){
        console.log(`A ave é da especie ${this.especie}, voa? ${this.voa}, o canto é ${this.canto}, é uma ave? ${this.eAve}`);
    }
    constructor(especie:string,voa: boolean,canto: string,eAve:boolean){
        this.especie = especie;
        this.voa = voa;
        this.canto = canto;
        this.eAve = eAve;
    }
    
}
class passaro extends ave {
    readonly som:string = "Fuifufiufufiu";

    constructor(especie:string,voa: boolean,canto: string,eAve:boolean){
        super(especie,voa,canto,true)
        this.eAve = true;
        
    }

    /*
    elaVoa(){
        console.log(this.voa); Erro, pois voa é um atributo privado da classe ave.
    }
    */
}

const calopsita = new passaro("Calopsita Cagona",true,"Fuifufiufufiu",true);
calopsita.listaInformacoes();


