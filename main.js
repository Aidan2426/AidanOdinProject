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

//parameters
function favoriteAnimal(animal){
    return animal + " is my favorite"
}
//arguments = goat
const message = favoriteAnimal('Goat');
console.log(message);

const array1 = ["aidan", "leo", "ash"];
for (a in array1){
    console.log(array1[a]);
}

//semicolons are mostly optional in javascript beucase the java interpreter will automaticlaly insert them if there are oitted

const myObject = {
    property: "Value", 
    otherProperty: 77, 
    "obnoxious property": function (){
        console.log("obn");
    }
}

console.log(myObject.property);

console.log(myObject["obnoxious property"]);

const playerOneName = "time";
const PlayTwoName = "jenn";
const playerOneMarket = "X";
const playerTwoMarket = "O";

const playerOne = {
    name: "tim",
    marker: "X",
};

const playerTwo = {
    name: "jenn", 
    market: "O",
}

const name1 = "Aidan";
console.log('Hello ${name1}');

console.log("Hello" + name1);

function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

const player = new Player("steve", "X");
console.log(player.name);

