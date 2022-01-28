// DIFERENÇAS (var, let, const, readonly)
// 1. var =    não é presa a nenhum escopo 
//             toda variável é “elevada/içada” (hoisting) até o topo do seu contexto de execução (podendo ser usada antes da declaração)
//             é automaticamente inicializada com o valor undefined (caso não seja atribuído nenhum outro valor)
// 2. let =    variáveis com escopo de bloco
//             o default tbm é undefined
// 3. const =  também tem escopo de bloco
//             uma vez atribuído um valor a ela, este não pode ser alterado
//             devem ser inicializadas obrigatoriamente no momento de sua declaração
// 4. readonly =  diferença entre readonly e const : 
//                se tiver trabalhando com variaveis usa const; 
//                se tiver trabalhando com atributos, interfaces ou classes usa o readonly



// CLASSES
class Person2{
    protected _name: string;
    constructor(name: string){
        this._name = name;
    }
    print():void{
        console.log(`name: ${this._name}`);
    }
    get name() : string {
        return this._name;
    }
    set name(v : string) {
        this._name = v;
    }
}

class Employee2 extends Person2{
   private _salary:number;
    constructor(name: string, salary:number){
        super(name);
        this._salary = salary;
    }
    print(): void {
        super.print();
        console.log(`salary: ${this._salary}`);
    } 
    get salary() : number {
        return this._salary;
    }
    set salary(v : number) {
        this._salary = v;
    }
}

let p1 = new Person2("João");
let emp1 = new Employee2("João Victor", 2500);
p1.print();
emp1.print();

// POLIMORFISMO
let p2 = <Person2>{}; // uma outra maneira de declarar
let p3 : Person2 = new Employee2("Lucy", 2000);
p3.print(); // lembrando que a gente chama pela variável de referencia mas quem executa é o objeto(no caso, Employee2)   
