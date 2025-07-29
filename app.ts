// function getName(firstName:string,lastName:string):string{
//     return `${firstName} ${lastName}`;
// }

// const data = getName("John", "Doe");

// console.log(data);

// const getData=(age:number):number=>{
//     return age;
// }
//  const rea=getData(16);
// console.log(rea);

// const person={
//     firstName:"Jasurjon",
//     lastName:"Toshtemirov",
//     skills:{
//         programming:"Javascript",
//         design:"Figma",
//     }
// }

// function getName(data: {firstName:string,lastName:string}){
//     return `${data.firstName} ${data.lastName}`
// }

// const person1=getName(person);
// console.log(person1);
// const cars:string[]=["BMW","Mercedes","Audi","Tesla"];
// const numbers:number[]=[1,2,3,4,5,6,7,8,9,10];
// const bools:boolean[]=[true,false,true,false];

// const uppercase=cars
//     .map(car=>car.toUpperCase())
//     .filter(car=>car.startsWith("B"))

// console.log(uppercase);

// const mixed:(string | number | boolean)[]=["Jasurjon", 16, true, "Toshtemirov", 18, false];

// console.log(mixed);


// Typle
// const person:[string,number]=["JasurjonToshtemirov",17];

// person.push("Jizzax");

// console.log(person);


// console.log(person[0]);
// console.log(person[1]);
// // console.log(person[2]);


// const person = ["Jasurjon", 17]

// const admins: readonly number[] =[1,2,3,4,5]

// admins.push(6)

// console.log(admins);



// const  person: (string | number)[] =["Jasurjon",17];

// const [fullname ,age]=person


// console.log(fullname);
// // console.log(age);


// enum Direction {
//     Up = "up",
//         Down = "Down",
//         Left = "Left",
//         Right = "Right"
// }

// function getDirection(direction: Direction) {
//     if (direction === Direction.Up) {
//         return "Yuqoriga burulish"
//     } else if (direction === Direction.Down) {
//         return "Pastga burilish"
//     } else if (direction === Direction.Left) {
//         return "Chapga burilish"
//     } else if (direction === Direction.Right) {}
// }

// const moveUp = getDirection(Direction.Up)
// console.log(moveUp);


// const moveDown=getDirection(Direction.Down)
// console.log(moveDown);


enum StatusCode {
    Ok = 200,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

function handleRequest(url: string): StatusCode {
    if (url === '/') {
        return StatusCode.Ok
    }
    if (url === '/server-error') {
        return StatusCode.INTERNAL_SERVER_ERROR
    }
    return StatusCode.NOT_FOUND
}


const homePage = handleRequest('/dawdwa')

if (homePage === StatusCode.NOT_FOUND) {
    console.log("404 Not Found")
}