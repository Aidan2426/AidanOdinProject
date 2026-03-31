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