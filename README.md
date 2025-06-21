
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
01-01-starting-project

On the terminal run the following command:
npm install -> To install all the dependencies
npm run dev -> To run the development server 
```


## Components, State, Hooks and Props - The basic building blocks of React

### Components, JSX and Dynamic Content
```xml

Download 01-01-starting-project folder for inital project setup
Copy it to 01-02-start-project-components 
This will be our working project

As usual go into the project folder and run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

In this project index.html load the index.jsx file which is 
responsible for loading the starting page

JSX:
---
JSX is a syntax extension to JavaScript. 
It is similar to a template language, but it has full power of JavaScript 
(e.g., it may output dynamic content).
JSX return (potentially dynamic) HTML(ish) code to define the actual markup 
that will be rendered.

<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>

Components:
-----------
Components are the building blocks of React applications. 
A component is a self-contained module (HTML + optional CSS + JS) that renders some output.
Componets are the core UI building block - compose the user interface by combining multiple components.

Components function must follow 2 rules:
1. Its name starts with upper case character
2. It must return renderable content 

Eg. 
function Welcome() {
  return <h1>Hello, World!</h1>;
}


From the original App.jsx file cut the header section and create a new component
called Header() and return its content. 

function Header() {
  return (
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>  
  );
}

Add this Header as a tag in the original area where you cut this content from. 
function App() {
  return (
    <div>
      <Header /> 
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;


Note: 
.jsx is a file extension that's not supported by the browser! 
It's working because you're working in a React project that supports 
this special extension. Because this extension "tells" the underlying 
build process (which is running behind the scenes when the development 
server is running) that a file contains JSX code (which is also not 
supported by browsers).


To add dynamic content to our react code, lets add the following
to the beginning App.jsx that will return a random dynamic value 
when the function is called from the reactDescriptions array. 

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

Next call this function inside the Header function:
function Header() {
   const description = reactDescriptions[genRandomInt(2)];

  return (
    <header> 
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

Next we can load the image dynamically:
import reactImg from "./assets/react-core-concepts.png";

And add this import in the Header component
function Header() {
   const description = reactDescriptions[genRandomInt(2)];

  return (
    <header> 
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}


```

### State, Hooks and Props 
```xml
Download 01-02-start-project-components folder for inital project setup
Copy it to 01-03-start-project-props 
This will be our working project

Go into the project folder and run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

Props:
------
Props
Components accept arbitrary inputs called props. They are like function arguments.
Props make components configurable (and therefore reusable) by passing 
input data to them.

Eg. 
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

From our code in App.jsx we can first import an image 
import componentsImg from "./assets/components.png"; 

Next create a CoreConcepts component
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>
        {props.description}
      </p>
    </li>
  );
}

Next use the component in our App component 
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
              <CoreConcept 
                title="Components" 
                description="The core UI builidng blocks"
                image={componentsImg}
              />
            </ul>
        </section>
      </main>
    </div>
  );
}


Reading data from array: 
For this import data.js into your project. 
This file import all images and it also has one array 
called CORE_CONCEPTS which has it own data blocks. 

The content of this file is: 
import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];


Import this named export CORE_CONCEPTS (not default export)
import { CORE_CONCEPTS } from "./data.js"; // not default export and so it is inside brackets

Read data from this import array as below in App component:

<CoreConcept 
	title={CORE_CONCEPTS[0].title} 
	description={CORE_CONCEPTS[0].description}
	image={CORE_CONCEPTS[0].image}
/>

Repeat this 4 times with incermental array index

But we have a shorter alternative to send the data within the props using spread operator
<CoreConcept {...CORE_CONCEPTS[0]}/> // Same as above and much concise

We can now recieve the data in the component like bofore
function CoreConcept(props) 
or 
function CoreConcept({image, title, description}) // by destructing resulting in slightly lesser code

Restructuring the components to its own folders:
-----------------------------------------------
We can create a 'components' folder and add
CoreConcept and Header components into its own file under this folder

Make sure to create CoreConcept.jsx and Header.jsx and add their respective 
components, their needed imports (after adjusting the path), removing them 
from the App.jsx file and importing the two new components created into the 
App.jsx file. 

After this step we have 3 files which will look like this: 

CoreConcept.jsx -> inside the components folder
---------------
function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>
        {description}
      </p>
    </li>
  );
}

export default CoreConcept;

Header.jsx -> inside the components folder
----------
import reactImg from "../assets/react-core-concepts.png";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
   const description = reactDescriptions[genRandomInt(2)];

  return (
    <header> 
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;

App.jsx
-------
import react from "react";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

import { CORE_CONCEPTS } from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>  
            </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

Next, it is a common best practise to leave the styles (css files) relating to the components 
that we develop near the file containing the component itself. So we remove header elements 
from the index.css and create a new files inside the components folder and refactor it here. 
Then make sure to add this file into Header.jsx component jsx file by importing it.
import "./Header.css";

We can now put the Header.jsx and Header.css files into its own folder under components 
folder. This is just a personal best practise that we could follow and not a requirement. 
After doing this, refactor the App.jsx and Header.jsx and adjust the imports accordingly 
to the new folder structure. 

Children
--------
props.childern will give us the data inbetween component tag.
<TabContent>Data</TabContent> -> 
{props.children} on the component -> will give 'Data'
or 
{children} will directly give 'Data' through object destructuring

Create a new component called TabButton.jsx and add the below content.
function TabButton({children}) {
  return (
    <li>
        <button>
            {children}
        </button>

    </li>
  );
}

export default TabButton;

Import this component into the App.jsx
import TabButton from "./components/TabButton.jsx";

This can be utilized in the App.jsx by creating a new section after the existing section:
<section id="examples">
	<h2>Examples</h2>
	<menu>
		<TabButton>Components</TabButton>
		<TabButton>JSX</TabButton>
		<TabButton>Props</TabButton>
		<TabButton>State</TabButton>
	</menu>
</section>


Handling Events
---------------
function export default TabButton({children}) {
    function handleClick() {
        console.log("Tab clicked:", children);
    }
    return (
        <li>
            <button onClick={handleClick}>
                {children}
            </button>

        </li>
    );
}

Note: Here we have function inside the function and will be 
executed when we click the button. We are not calling the function 
as {handleClick()} but making reactjs call the function by 
enclosing it as {handleClick}. Otherwise it will be executed on the 
component load itself and will not execute onClick. 

To have our own click events on the TabButton move the 
handleClick() function to the App.jsx.

Next on the TabButton:
<TabButton onSelect={handleClick}>Components</TabButton>

Handle the onSelect inside the TabButton component as:
function export default TabButton({children, onSelect}) {
    return (
        <li>
            <button onClick={onSelect}>
                {children}
            </button>

        </li>
    );
}


State
-----
State allows React components to change their output over time in response 
to user actions, network responses, and anything else.
State is react-managed data which, when changed, 
causes the component to re-render & the UI to update.

Eg. 
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}



All the functions from the react project that start with 'use' are called react hooks.
useState is one such hook for handling state within the react projects. 

Two rules to react hooks: 
1. React hooks must be called only inside react components or another react hook.
2. It must be called in the top level of the react component
eg. 
function App() {
	useState();
	// other lines of codes to follow below: 
	----	
	----
}


useState will always return an array of exactly 2 elements. 
It can be passed the initial default value to store when created. 

Eg. const [selectedTopic, setSelectedTopic] = useState('components');

Here the initial value to store is 'components' and its return value 
is stored in 'selectedTopic' and 'setSelectedTopic' by array destructuring. 
The first value returned is the current data snapshot and the second value 
is a function provided by react to update this value. 

Note: in react component we need to add an attribute called 'className'
instead of 'class' if we need to set a styling 


## Essentials - Deep Dive
```xml
Fragments:
React needs components to return single value and we usually warp all values in a div tag. 
Eg. 
return (
	<div>
		<Main/>
		<Header>
	</div>
)

but this extra div can sometimes cause additional rendering issues on the browser. 
To avoid this React provides 2 options to wrap our mutiple tags that are returned. 

We can use <Fragments> by first importing it using import {Fragments} from 'react';
and then wrap it as <Fragments></Fragments> by replacing <div></div> or 
use simply an empty tag <></> which will not cause any rendering issue on the browser 





```

### Reference
```xml
https://www.youtube.com/watch?v=9Crrhz0pm8s
https://react.dev/reference/react
https://vite.dev/guide/

https://www.udemy.com/course/react-the-complete-guide-incl-redux/
https://github.com/academind/react-complete-guide-course-resources
```
