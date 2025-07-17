// const jasurjonName: string = "Jasurjon";

// let jasurjon = "Jasurjon Toshtemirov";
// console.log(jasurjon);

// let age: number = 17;

// let mevalar:any = ["olma", "Anor", "Nok", "gilos",10];

// console.log(mevalar);


// function add(a:number,b:number){
//     return a+b;
// }

// console.log(add(10,20));
// function greeat(name:string):void{
//  console.log(`Assalomu alaykum ${name}`);
//  return;

// }

// greeat("Jasurjon Toshtemirov");



// function sayHello(name: string): string;

// function sayHello(name: string[]): string[];

// function sayHello(name: unknown): unknown {
//     if(typeof name==="string"){
//         return `Hello I'am ${name}`;
//     } else if(Array.isArray(name)){
//         return name.map(name=> `Hello Mening ismim ${name}`)
//     }
//        throw new Error("Something  went  wrong")
// }

// console.log(sayHello("Jasurjon"));
// console.log(sayHello(["Jasurjon", "Toshtemirov", "Amaliyot"]));




// interface Person{
//     name:string;
//     age:number;
// }

// function greet(person:Person){
//     return `Hello, ${person.name}, you are ${person.age} years old.`;
// }

// console.log(greet({name:"Jasurjon", age: 17}));




class Person{
    firstname:string;
    age:number;

    constructor(firstname:string, age:number){
        this.firstname=firstname;
        this.age=age;
    }

    greet(){
        return `Hello, ${this.firstname}!`
    }
    public getage():number{
        return this.age;    
    }
}

const person= new Person("Jasurjon",17);

console.log(person.greet());
