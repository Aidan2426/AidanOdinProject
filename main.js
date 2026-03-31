let firstName = "john";
let lastname = "Doe";

console.log(firstName);
console.log(lastname);

let age = 11;
console.log(age);
age = 54;
console.log(age);

const pi = 3.14;
//pi = 10; throws an error
console.log(pi);

//let can be reassigned and const can't be

let year = 10000 - age;
console.log("year: " + year);

const string = "this is a string";
console.log(string);

const string2 = " also a string";
console.log(string + string2);

//commment

/*
mutli line comment
*/

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

let num = 5;

if(num > 4){
    console.log("num > 4");
} else{
    console.log("not true");
}

if(true && true){
    console.log(true);
}
if(true && false){
    console.log(false);
}
if(true || false){
    console.log(true);
}

for(let i = 0; i<10; i++){
    console.log(i);
}
let i = 0;
while (i < 10){
    i++;
    console.log(i);
}

//now its going into dom which I don't think I'm gonna need in the slightest basically I'm just trying to get more familer with js

function favoriteAnimal(animal){
    return animal + " is my favorite"
}

const message = favoriteAnimal('Goat');
console.log(message);