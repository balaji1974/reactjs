
# Reactjs

## Introduction
```xml 
React is a Javascript library for bulding web and native user interfaces


```

## ReactJS Setup - Mac  
```xml 
Install nodejs and npm 
----------------------
Go to the offical site of NodeJS
https://nodejs.org/en/download

Download and install the package 

Go to command prompt and check: 
node -v 
nvm current 
npm -v

For upgrading node to the latest version
----------------------------------------
sudo npm cache clean -f
sudo npm install -g n
sudo n stable


Creating an online React Project - Quickly 
------------------------------------------
On the browser type: react.new
This will open a CodeSandbox to create React project quickly 


```

## Creating the first reactjs project  
```xml 
Go to the directory of your choice 
and run the below command:
npx create-react-app spring-ai-demo

cd spring-ai-demo
npm start

This will start the node server and 
load the first react page on the browser at:
http://localhost:3000/

Download and follow the project from the Github repo. 
* Make sure backend under Spring AI repo is started.

```


## Quick React projects with Vite 
```xml 
https://vite.dev/guide/

Run the following command: 
npm create vite@latest

Project Name: spring-ai-audio-trascribe
Select a framework: › React
Select a variant: › JavaScript

This will quickly create a reactjs project. 

Now run the following commands:
cd spring-ai-audio-trascribe
npm install
npm run dev

This will start the server at: 
http://localhost:5173/

Finally open the project in Visual studio code. 

Download and follow the project from the Github repo. 

(also run npm install axis -> requirement)
* Make sure backend under Spring AI repo is started.
* Sample resouce audio file is given as hello.mp3 within
this project

```

## Javascript Basics - Tips 
```xml 

Defer
-----
By using 'defer' javascript will be downloaded in parallel to parsing the page, 
and executed after the page has finished parsing:
<script scr="assets/script/app.js" defer></script>


Module & Export/Import
----------------------
The <script type="module"> attribute is used to denote when a module is being pointed to. 
This will enable us to export and import functions, var, let, const, and classes 
from one js to another js file
Eg. <script scr="assets/script/file1.js" type="module"></script>

and in file2.js:
export { name, draw, reportArea, reportPerimeter };

or export each variable seperately like:
export let name="Balaji";
export let draw="Draw a line"

and in file1.js we can use:
import { name, draw, reportArea, reportPerimeter } from "./assets/script/file2.js";

or group all the exports in one single object, in our case util:
import * as util from "./assets/script/file2.js";
and then access the varibale as: 
console.log(util.name)

'As' keyword as alias
---------------------
as keyword can be used in import to create new alias names for the imported variables: 
import { name as newName, draw as newDraw, reportArea, reportPerimeter } from "./assets/script/file2.js";

No Script
---------
<noscript></noscript>
noscript tag defines an alternate content to be displayed to users that have disabled scripts 
in their browser or have a browser that doesn't support script.

Exporting / Import default
--------------------------
in file2.js (note only one default export allowed per file)
export default "xxxxxx12345XXX";

and in file1.js
import apiKey from "./assets/script/file2.js";

let vs var
----------
var: Variables declared with var are function-scoped. 
This means they are accessible throughout the entire function in which they are declared, 
even if declared inside a block (e.g., inside an if statement or a loop).

let: Variables declared with let are block-scoped. 
This means they are only accessible within the block in which they are declared.

const
-----
The const keyword in JavaScript declares a constant variable, meaning its value cannot be 
reassigned after its initial assignment. This helps prevent accidental changes to variables 
that should remain fixed.

Operators
---------
+ -> addition, but to concat if used with strings
- -> subtract 
* -> multiply
/ -> division
=== -> triple equal sign and is used to check equality and results in boolean 
>, <, >=, <=, != -> Comparison operators (greater than,  lesser than, greater than or equal to, lesser than or equal to and not equal to)


Example
-------
let msg1 = "Hello world!";
const msg2 = "hello world again";
console.log(msg1);
console.log(msg2);

console.log(10 + 5);
console.log("Hello " + "world");
console.log(10 === 5); //to check equality

function greet(msg, otherMsg = "default value") {
  console.log(msg);
  console.log(otherMsg);
  return msg + " " + otherMsg;
}
console.log(greet("Hello all"));
const greetings = greet("Hi", "override defaults");
console.log(greetings);

This will output:
----------------
Hello world!
hello world again
15
Hello world
false
Hello all
default value
2Hello all default value
Hi
override defaults
Hi override defaults

Anonymous functions: (2 ways of creating)
--------------------
export default function () {
  console.log("Hello");
}

() => {
  console.log("Hi");
};


Objects in Javascript
---------------------
const user = {
  name: "Balaji",
  age: 45,
  greet() {
    console.log("Hello");
    console.log(this.age);
  },
};
console.log(user);
console.log(user.name);
user.greet();

Class in javascript
-------------------
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("Inside constructor");
  }
  greet() {
    console.log("User object");
  }
}

const user1 = new User();
user1.greet();

const user2 = new User("Bala", 45);
console.log(user2);


Arrays
------
const sports = ["hockey", "cricket", "swimming"];
console.log(sports);
console.log(sports[1]); // will print cricket, arrays start with index 0.

sports.push("cycling"); //add elements to the array
console.log(sports.length); // will print the length of the array

// findIndex to find an item index from the array
const index1 = sports.findIndex((item) => {
  return item === "swimming";
});
console.log(index1); // print the index

// more concise way of the above function
const index2 = sports.findIndex((item) => item == "cricket");
console.log(index2); // print the index

// returns new array by mapping every element with something else
const sportsMapped = sports.map((item) => item + "!");
console.log(sportsMapped);

// returns an array of mapped objects
const sportsObject = sports.map((item) => ({ sport: item }));
console.log(sportsObject);


Destructuring
-------------
1. Array Destructuring
const [firstName, lastName] = ["Balaji", "Thiagarajan"];
console.log (firstName);
console.log (lastName);

2. Object Destructuring
const { name, age } = { // here variable must be same as object variable
  name: "Balaji",
  age: 45,
};
console.log(name);
console.log(age);

3. Function Destructuring
function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}

Spread Operator
---------------
// Spread operator on arrays
const hobbies = ["cycling", "music"];
const additionalHobbies = ["running"];

const mergedHobbies = [...hobbies, ...additionalHobbies];
console.log(mergedHobbies);

// Spread operator on object
const user = {
  name: "Balaji",
  age: 45,
};

const extendedUser = {
  isAdmin: true,
  ...user,
};

console.log(extendedUser);

for loop using arrays:
----------------------
const val = [1, 5, 7];

for (const v of val) { 
  console.log(v);
}

Passing a function to a function - Function as value
----------------------------------------------------
function handleTimeout1() {
  console.log("Timeout 1");
}

const handleTimeout2 = () => {
  console.log("Timeout 2");
};

setTimeout(handleTimeout1, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log("Timeout 3");
}, 4000);


// Custom function
function greeter(greetFn) {
  greetFn();
}

greeter(() => {
  console.log("Hi...");
});


Nested Functions
----------------
function greet() {
  function innerGreet() {
    console.log("Hi");
  }
  innerGreet();
}

//innerGreet(); -> This cannot be run outside of the function
greet();

```

## Starting a react project 
```xml
Running the sample Reactjs project from VS Code:
Open the folder containing the project: 
01-starting-project

On the terminal run the following command:
npm install -> To install all the dependencies
npm run dev -> To run the development server 
```






### Reference
```xml
https://www.youtube.com/watch?v=9Crrhz0pm8s
https://react.dev/reference/react
https://vite.dev/guide/

https://www.udemy.com/course/react-the-complete-guide-incl-redux/
https://github.com/academind/react-complete-guide-course-resources
```
