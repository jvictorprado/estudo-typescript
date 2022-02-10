//GENERICS

function reverseList<T> (list: Array<T>) : Array<T>{
    let reversedList : T[] = [];
    for(let i = list.length-1; i>=0; i--){
        reversedList.push(list[i]);
    }
    return reversedList;
}

let names = ["Ana", "Bianca", "Carlos"];
let numbers = [1,2,3,4];
let reversedNames = reverseList<string>(names);
let reversedNumbers = reverseList<number>(numbers);
console.log(reversedNames);
console.log(reversedNumbers);

let reverseListArrow = <T>(list : Array<T>) : Array<T> =>{
    let reversedList : T[] = [];
    for(let i = list.length-1; i>=0; i--){
        reversedList.push(list[i]);
    }
    return reversedList;
};

console.log(reverseListArrow(names));

//EM CLASSES E INTERFACES
class Person3{
    private _name: string;
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

interface Repository<T,ID>{
    findById(id : ID):T;
    save(entity : T):T;
}

class Person3Repository implements Repository<Person3,number>{
    findById(id: number): Person3 {
        console.log(`Searching using ID: ${id}`);
        return new Person3("Nami");
    }
    save(entity: Person3): Person3 {
        return new Person3("Franky");
    }
}

let personRepository = new Person3Repository();
console.log(personRepository.findById(3));
console.log(personRepository.save(new Person3("Chooper")));