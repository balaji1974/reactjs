
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
=== -> triple equal sign and is used to check strict equality (equality for both type and value) and results in boolean 
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
Copy it to 01-02-starting-project-components 
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

### Props 
```xml
Download 01-02-starting-project-components folder for inital project setup
Copy it to 01-03-starting-project-props 
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


Passing arguments to custom function:
-------------------------------------
Change the handleClick function to accept a parameter:
function handleClick(selectedButton) {
	console.log("Tab clicked " + selectedButton);
}

Next pass the paramter when calling this function using arrow function, 
in our case using the anynomous arrow function: 
<TabButton onSelect={()=>handleClick('components')}>Components</TabButton>
<TabButton onSelect={()=>handleClick('jsx')}>JSX</TabButton>
<TabButton onSelect={()=>handleClick('props')}>Props</TabButton>
<TabButton onSelect={()=>handleClick('state')}>State</TabButton>

Note:
<TabButton onSelect={handleClick('state')}>State</TabButton>
This will not work as react doesnt know how to handle this value 
So we must use arrow function in this instance for React build process 
to work correctly

Even if the function is called as a result of onClick it cannot re-render the UI
to allow the changed values to reflect on the UI, which once rendered initially 
will not render again. 

Eg. 
let tabContent = "Initial value";
function handleClick(selectedButton) {
	tabContent=selectedButton;
}

and printing the {tabContent} in the UI will not allow it to change for 
every click of the button. 
This can be achieved through state management. 

```

### State and Hooks
```xml
Download 01-03-starting-project-props folder for inital project setup
Copy it to 01-04-starting-project-state 
This will be our working project

Go into the project folder and run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

Hooks
-----
A functions that start with 'use' from the react projects are 
considered as react hooks
Eg.
// useState is a react hook 
import {useState} from "react";


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
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}


useState will always return an array of exactly 2 elements. 
It can be passed the initial default value to store when created. 

Eg. const [selectedTopic, setSelectedTopic] = useState('components');

Here the initial value to store is 'components' and is stored in 'selectedTopic' 
and 'setSelectedTopic' is the function that will be used to change the value
of the selectedTopic. 

The first value returned is the current data snapshot and the second value 
is a function provided by react to update this value in future. 

With this in place our code inside App.jsx will be changed as follows:
const [selectedTopic, setSelectedTopic] = useState('components');
  
function handleClick(selectedButton) {
	setSelectedTopic(selectedButton);
}

and it will be displayed using:
{selectedTopic}
after the </menu> tag 

Complete Example to change price upon button click:
import {useState} from 'react';
export default function App() {
    const [price, setPrice]=useState('$100');
    function changePrice(newPrice) {
        setPrice(newPrice);
    }
    return (
        <div>
            <p data-testid="price">{price}</p>
            <button onClick={()=>changePrice('$75')}>Apply Discount</button>
        </div>
    );
}


To load content dynamically on the tabs we have a new data.js file 
for this project which has additional content on EXAMPLES object. 
We can import this into our App.jsx like this: 

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

After the menu section we can load this by the below code:
<div id="tab-content">
	<h3>{EXAMPLES[selectedTopic].title}</h3>
	<p>{EXAMPLES[selectedTopic].desciption}</p>
	<pre>
		<code>{EXAMPLES[selectedTopic].code}</code>
	</pre>
</div>

Output content conditionally:
----------------------------
To output content conditionally only when the tab is selected 
and nothing initially we will modify our code as below:
const [selectedTopic, setSelectedTopic] = useState();
    
{!selectedTopic ? <p> Please select a content</p> : null}
{selectedTopic ? (
	<div id="tab-content">
	  <h3>{EXAMPLES[selectedTopic].title}</h3>
	  <p>{EXAMPLES[selectedTopic].desciption}</p>
	  <pre>
	    <code>{EXAMPLES[selectedTopic].code}</code>
	  </pre>
	</div>
) : null}   

or by using the below approach: (both yeild the same result)
{!selectedTopic && <p> Please select a content</p>}
{selectedTopic && (
	<div id="tab-content">
	  <h3>{EXAMPLES[selectedTopic].title}</h3>
	  <p>{EXAMPLES[selectedTopic].desciption}</p>
	  <pre>
	    <code>{EXAMPLES[selectedTopic].code}</code>
	  </pre>
	</div>
)}

Dynamic styling:
---------------
On the TabButton component: (conditional isSelected - as an input parameter)
<button className={isSelected ? 'active': undefined} onClick={onSelect}>
	{children}
</button>

and on the TabButton in App.jsx to check the selected button name 
that is set in handleClick with the selectedTopic name:
<TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleClick('components')}>Components</TabButton> 

Note: in react component we need to add an attribute called 'className'
instead of 'class' if we need to set a styling 


Dynamic List:
-------------
From:
<ul>
	<CoreConcept {...CORE_CONCEPTS[0]}/>
	<CoreConcept {...CORE_CONCEPTS[1]}/>
	<CoreConcept {...CORE_CONCEPTS[2]}/>
	<CoreConcept {...CORE_CONCEPTS[3]}/> 
</ul>

we can dynamically iterate CORE_CONCEPTS array like this: 
<ul>
	{CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem}/>)}
</ul>

But with this approach we have a warning in our dev console:
Each child in a list should have a unique "key" prop

To get rid of this warning we will add a unique 'key' tag which 
identifies the component with a unique value. 
{CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}

```

## Essentials - Deep Dive

### Fragments & Splitting Components
```xml
Download 01-04-starting-project-states folder for inital project setup
Copy it to 02-01-starting-project-fragments
This will be our working project

Go into the project folder and run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

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

Option 1: 
We can use <Fragments> by first importing it using: 
import {Fragments} from 'react';
and then wrap it as: 
<Fragments></Fragments> by replacing <div></div> 

Option 2:  
Use simply an empty tag <></> which will not cause any rendering issue on the browser 


Splitting Components: 
--------------------
For splitting we can find that App.jsx has CoreConcepts and Examples sections 
which can be split into their seperate Components. 

After the splitting and refactoring we have the final version of the 
code in the 02-01-starting-project-fragments folder.

```

### Forwarding Props to inner elements
```xml
Download 02-01-starting-project-fragments folder for inital project setup
Copy it to 02-02-starting-project-forwarding
This will be our working project

Go into the project folder and run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

Since we have 2 components Examples.jsx and CoreConcepts.jsx both 
having the similar structure for <section> which contains <h2> and a body 
under it, it makes sense to create a new component called Section which can 
be degelated to this functionality. 

But the only problem with this approach is not all properties of <Section> 
are automatically forward to the component 'Section'. So we use the concept of 
forwarding all the props using spread operation and then using object destructing 
inside the component we can refer to all the remaining props that are set on the 
<Section> tag.

Eg. 
In Examples.jsx
<Section title="Examples" id="examples">
	// all body elements here
<Section>

and in Section component we have: 
function export default Section({title, children, ...props}) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

Same can be applied for CoreConcepts.jsx 
<Section title="Time to get started!" id="core-concepts">
	// all body elements here
<Section>

Next we create a new component called Tabs:
function export default Tabs({buttons, children}) {
    return (
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    );
}

and in our Examples.jsx file we can use it to optimize our TabsButton
import Tabs from "./Tabs.jsx";

<Tabs buttons={
    <>
        <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleClick('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleClick('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleClick('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleClick('state')}>State</TabButton>
    </>
}>
    {!selectedTopic && <p> Please select a content</p>}
    {selectedTopic && (
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].desciption}</p>
            <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
    )}
</Tabs>

To generalize the <menu> used inside the Tabs containter (as tomorrow 
we may have another wrapper):
function export default Tabs({buttons, children, buttonsContainer}) {
    const ButtonsConainter = buttonsContainer;
    return (
        <>
            <ButtonsConainter>
                {buttons}
            </ButtonsConainter>
            {children}
        </>
    );
}

and in Examplex.jsx we can use it as 
<Tabs 
    buttonsContainer="menu"
    buttons={
       ....
    }
>

Note: we can also pass our own customs component to be used as a wrapper like,
buttonsContainer={CustomsWrapper}

We can also set wrappers as default and not pass if from our Examples.jsx:
function export default Tabs({buttons, children, buttonsContainer='menu'})

and in our Examples.jsx - by default buttonsContainer will be menu as it is not passed
<Tabs 
    buttons={
       ....
    }
>

```

## Advance Concepts

### Components, State and two way binding with Tic-Tac-Toe
```xml
Download 03-01-tic-tac-toe-starting-project folder for inital project setup
Copy it to 03-02-tic-tac-toe-starting-project-twowaybinding
This will be our working project

Go into the project folder and run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

Closer Look: public/ vs assets/ for Image Storage
-------------------------------------------------
The public/ Folder:
You can store images in the public/ folder and then directly reference them 
from inside your index.html or index.css files.

The reason for that is that images (or, in general: files) stored in public/ 
are made publicly available by the underlying project development server & build process. 
Just like index.html, those files can directly be visited from inside the browser and 
can therefore also be requested by other files.

If you try loading localhost:5173/some-image.jpg, you'll be able to see that image 
(if it exists in the public/ folder, of course).

The src/assets/ Folder:
You can also store images in the src/assets/ folder (or, actually, 
anywhere in the src folder).

So what's the difference compared to public/?

Any files (of any format) stored in src (or subfolders like src/assets/) 
are not made available to the public. They can't be accessed by website visitors. 
If you try loading localhost:5173/src/assets/some-image.jpg, you'll get an error.

Instead, files stored in src/ (and subfolders) can be used in your code files. 
Images imported into code files are then picked up by the underlying build process, 
potentially optimized, and kind of "injected" into the public/ folder right before 
serving the website. Links to those images are automatically generated and 
used in the places where you referenced the imported images.

Which Folder Should You Use?
You should use the public/ folder for any images that should not be handled by the 
build process and that should be generally available. 
Good candidates are images used directly in the index.html file or favicons.

On the other hand, images that are used inside of components should typically 
be stored in the src/ folder (e.g., in src/assets/).


We first add static content under the body in index.html:
<header>
  <img src="game-logo.png" alt="Tic-Tac-Toe"></img>
  <h1>Tic-Tac-Toe</h1>
</header>


Next create a Player.jsx inside a components folder:
function export default Player({name, symbol}) {
    return (
        <li>
            <span className='player'>
              <span className='player-name'>{name}</span>
              <span className='player-symbol'>{symbol}</span>
            </span>
            <button>Edit</button>
          </li>
    );
}

and use this in our App.jsx:
import Player from './components/Player.jsx'

function export default App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player name='Player1' symbol='X'></Player>
          <Player name='Player2' symbol='O'></Player>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  )
}


Two way binding:
---------------
Two-way binding in React refers to the synchronization of data between a 
component's state and a user interface element, typically an input field, 
in both directions. This means: 
State to UI:
When the component's state changes, the UI element's value automatically 
updates to reflect that new state.
UI to State:
When a user interacts with the UI element (e.g., typing in an input field), 
the component's state automatically updates to reflect the new value from the UI.

With this we change our Player.jsx file to reflect 2 way binding on playerName: 
import {useState} from 'react';

function export default Player({name, symbol}) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick() {
        setIsEditing(isEditing => !isEditing);
    }
    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }
    return (
        <li>
            <span className='player'>
              {!isEditing && <span className='player-name'>{playerName}</span>}
              {isEditing && <input type='text' defaultValue={playerName} onChange={handleNameChange} required/>}  
              <span className='player-symbol'>{symbol}</span>     
            </span>
            <button onClick={handleEditClick}>{isEditing? 'Save': 'Edit'}</button>
          </li>
    );
}

Another example for 2 way binding: 
----------------------------------

import React from 'react';

import Review from './Review';

// don't change the Component name "App"
function export default App() {
  const [textAreaValue, setTextAreaValue] = React.useState();
  const [inputTextValue, setInputTextValue] = React.useState();
  function handleInputTextValue(event) {
      setInputTextValue(event.target.value);
  }
  function handleTextAreaValue(event) {
      setTextAreaValue(event.target.value);
  }
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea defaultValue={textAreaValue} onChange={handleTextAreaValue} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" defaultValue={inputTextValue} onChange={handleInputTextValue} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review student={inputTextValue} feedback={textAreaValue}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default function Review({ feedback, student }) {
  return (
    <figure>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{student}</figcaption>
    </figure>
  );
}

Note: Please check passing event into the function 
and getting the value from event.target.value

```

### Multi Dimensional List and State  
```xml
Download 03-02-tic-tac-toe-starting-project-twowaybinding folder for inital project setup
Copy it to 03-03-tic-tac-toe-starting-project-state
This will be our working project

Go into the project folder and run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

Setting up the GameBoard:
------------------------
Create new component called GameBoard:
const initialState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function export default GameBoard() {
  return (
    <ol id="game-board">
        {initialState.map((row, rowIndex) => 
            <li key={rowIndex} >
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button>{playerSymbol}</button>
                        </li>
                    )}
                </ol>
            </li>
        )}
    </ol>
  );
}

and use it in App.jsx below </ol>:
<GameBoard/>

Object State Immutability: 
-------------------------
In case of changing values in the Object (in our case Array)
the best pracitise is to create a new object and assign values to it 
rather than changing the values of the existing array (best practise
in javascript). With this in place we introduce state in our GameBoard 
component and introduce our object state immutability to our 
initialState array. 

function export default GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialState); // Create a copy of the initial state 
  function handleButtonClick(rowIndex, colIndex) {
    
    setGameBoard((previousBoard) => {
      const updatedBoard = [...previousBoard.map(innerArray => [...innerArray])]; // Create a deep copy of the board
      updatedBoard[rowIndex][colIndex] = previousBoard[rowIndex][colIndex] = 'X' ;
      return updatedBoard;
    });
  }
  return (
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex} >
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={()=> handleButtonClick(rowIndex,colIndex)}>{playerSymbol}</button>
                        </li>
                    )}
                </ol>
            </li>
        )}
    </ol>
  );
}

Lifting the state up:
--------------------
If more than one components need to share the same state, lift the state up
to the closest ancestor component that has access to all components 
that needs to work with the state. 

In our App.jsx we will set activePlayer state and toggle between two states 
when the box is selected on the GameBoard. Along with this we also pass the 
current active player symbol to be set on the GameBoard.  
We also pass this state to the Player component to set the highlight based 
on the active player. 

function export default App() {
  const [activePlayer, setActivePlayer] = useState('X');
  
  function handleSelectSquare() {
    setActivePlayer(activePlayer => {
      return activePlayer === 'X' ? 'O' : 'X'});
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name='Player1' symbol='X' isActive={activePlayer==='X'}></Player>
          <Player name='Player2' symbol='O' isActive={activePlayer==='O'}></Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      LOG
    </main>
  )
}

GameBoard.jsx
function GameBoard({onSelectSquare, activePlayerSymbol}) {
.....
	function handleButtonClick(rowIndex, colIndex) {
        setGameBoard((previousBoard) => {
	      const updatedBoard = [...previousBoard.map(innerArray => [...innerArray])]; // Create a deep copy of the board
	      updatedBoard[rowIndex][colIndex] = previousBoard[rowIndex][colIndex] = activePlayerSymbol; 
	      return updatedBoard;
	    });
	    onSelectSquare();
  }
}

Player.jsx
function Player({name, symbol, isActive}) {
	....

	return (
        <li className={isActive ? 'active' : undefined}>  
        ......
    );
}

```

### Components, State and two way binding with Tic-Tac-Toe (Continued......)
```xml
Download 03-03-tic-tac-toe-starting-project-state folder for inital project setup
Copy it to 03-04-tic-tac-toe-starting-project-props
This will be our working project

Go into the project folder and run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

Working on displaying the log 
-----------------------------
To display log we need to once again lift state up and move out our 
state management from GameBoard to App.jsx as we need both turns and 
its log at the same time in the App.jsx for us to keep updating our state.

For this we need to modifiy our App.jsx and GameBoard.jsx like: 
App.jsx:
function export default App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((previousTurns) => {
      let currPlayer = 'X';
      if(previousTurns.length>0 && previousTurns[0].player === 'X') {
        currPlayer = 'O';
      }
      
      const updateTurns = [
        {
          square: {row: rowIndex, col: colIndex}, 
          player: currPlayer
        }, 
        ...previousTurns];
      return updateTurns;
    });

  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name='Player1' symbol='X' isActive={activePlayer==='X'}></Player>
          <Player name='Player2' symbol='O' isActive={activePlayer==='O'}></Player>
        </ol>
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          turns={gameTurns}
        />
      </div>
      <Log/>
    </main>
  )
}

GameBoard.jsx: 
function export default GameBoard({onSelectSquare, turns}) {
  // comment all the below existing code 
  // const [gameBoard, setGameBoard] = useState(initialState);
  
  // function handleButtonClick(rowIndex, colIndex) {
  //   setGameBoard((previousBoard) => {
  //     // Create a deep copy of the previous board to avoid mutating state directly 
  //     // and to ensure React can detect changes
  //     const updatedBoard = [...previousBoard.map(innerArray => [...innerArray])]; // Create a deep copy of the board
  //     updatedBoard[rowIndex][colIndex] = previousBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }

  let gameBoard = [...initialBoard.map(row => [...row])]; // deep copy of the initial board
  for(const turn of turns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex} >
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    )}
                </ol>
            </li>
        )}
    </ol>
  );
}

With this we are now read to pass our turns to display the log.
function export default Log({turns}) {
    return (
        <ol id='log'>
            {turns.map((turn) => 
                <li key={`${turn.square.row}${turn.square.col}`}> 
                    {turn.player} selected {turn.square.row} , {turn.square.col}
                </li>
            )}
        </ol>
    );
}

and our log in App.jsx must send the turns to this component:
<Log turns={gameTurns}/>

One more optimization on App.jsx is we can already get our
activePlayer from gameturns state and hence managing 2 states here 
is not needed. So we can change our code by creating a new funcion like
below and calling this in 2 places inside the App() function and also 
disabling the state management of activePlayer. 

function deriveActvePlayer(turns) {
  let currPlayer = 'X';
  if(turns.length>0 && turns[0].player === 'X') {
    currPlayer = 'O';
  }
  return currPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActvePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((previousTurns) => {
      let currPlayer = deriveActvePlayer(previousTurns);
      const updateTurns = [
        {
          square: {row: rowIndex, col: colIndex}, 
          player: currPlayer
        }, 
        ...previousTurns];
      return updateTurns;
    });

  }
  .......
}

To prevent the button from being clicked twice, in the 
GameBoard.jsx disable the button if it has either X or O 
<button 
  onClick={() => onSelectSquare(rowIndex, colIndex)}
  disabled={playerSymbol!=null} // Disable button if already occupied
>
  {playerSymbol}
</button>

Selecting the winning combinations:
Add the winning comibination js file to your project by adding it 
to your project source directory and importing it in the App.jsx 
import { WINNING_COMBINATIONS } from './winning-combinations.js';

For displaying the game result and setting the draw or 
win in App.jsx add the following:
let winner;
for(const combination of WINNING_COMBINATIONS) {
	const [first, second, third] = combination;
	const firstSymbol = gameBoard[first.row][first.column];
	const secondSymbol = gameBoard[second.row][second.column];
	const thirdSymbol = gameBoard[third.row][third.column];

	if(firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
	  winner = firstSymbol;
	  console.log(`Player ${firstSymbol} wins!`);
	}
}

const hasDraw = gameTurns.length === 9 && !winner; 

and set the below line just above the GameBoard component in App.jsx:
{ (winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestartGame}/> }

Create a handleRestartGame function in App.jsx
function handleRestartGame() {
	setGameTurns([]);
} 

Create the GameOver component in the file GameOver.jsx:
function export default GameOver({winner, onRestart}) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>{winner} won !</p>}
            {!winner && <p>It's a draw!</p>}
            <p><button onClick={onRestart}>Play Again</button></p>
        </div>
    );
}

and import the GameOver component in App.jsx
import GameOver from './components/GameOver.jsx';

Setting the player name on winning must be done not by brining 
the player name outside the Player component as this would mean 
that the player name gets re-evaluated on every key strock which is 
not ideal. So we need to handle this state from App.jsx by the below 
change in code:

Create a new state to handle this:
const [players,setPlayers] = useState(
    {
      'X': 'Player 1',
      'O': 'Player 2'
    }
  )

Create a function:
function handlePlayerNameChange(symbol, newName) {
	setPlayers(prevPlayers => {
	  return {
	    ...prevPlayers,
	    [symbol]: newName 
	  };
	})
}

Set the Player components to call this function:
<Player 
	name='Player1' 
	symbol='X' 
	isActive={activePlayer==='X'}
	onNameChange={handlePlayerNameChange}
>


and change the Player.jsx to handle this:
function export default Player({name, symbol, isActive, onNameChange}) {
    .....
    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if(isEditing) onNameChange(symbol, playerName);
    }
    ......
}

Finally clean up the App.jsx file: 
Create a derive winner function and move this activity outside of App function:
function deriveWinner(gameBoard, players) {
  let winner;
  for(const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination;
    const firstSymbol = gameBoard[first.row][first.column];
    const secondSymbol = gameBoard[second.row][second.column];
    const thirdSymbol = gameBoard[third.row][third.column];

    if(firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      winner = players[firstSymbol];
      console.log(`${winner} wins!`);
    }
  }
  return winner;
}

Also create a derive game board function and move this activity outside of App function:
function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialBoard.map(row => [...row])]; // deep copy of the initial board
  for(const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

Also rename intialGameBoard to INITIAL_GAME_BOARD
and create PLAYERS const as 
const PLAYERS = {
  'X': 'Player 1',
  'O': 'Player 2'
}

and use it instead of ...initialGameBoard 
and setting players state and in the player tag for setting inital value of players. 

With this the game tic-tac-toe is complete and optimized. 

```

## Practising what you have learnt so far - Investment calculator
```xml
Download 04-starting-project folder for inital project setup
Copy it to 04-starting-project-practise
This will be our working project

Go into the project folder and run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

Adding a header component:
--------------------------
Create a file called Header.jsx inside the components folder
and add its contents as below: 

import logo from '../assets/investment-calculator-logo.png';
function export default Header() {
    return  (
        <header id='header'>
            <img src={logo} alt='logo'/>
            <h1>React Investment Calculator</h1>

        </header>
    );
}

and in App.jsx add the Header component: 
import Header from './components/Header';

function export default App() {
  return (
    <Header />
  );
}

Creating the user input component: 
----------------------------------
Create a file called UserInput.jsx inside the components folder
and add its contents as below:
import { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] =useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10
  });

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: newValue
      };
    });
  }

  return (
    <section id='user-input'> 
        <div className='input-group'>
            <p> 
                <label>Initial Investment</label>
                <input type="number" 
                    required 
                    value={userInput.initialInvestment}
                    onChange={(event)=>handleInputChange('initialInvestment', event.target.value)}
                />
            </p>
            <p> 
                <label>Annual Investment</label>
                <input type="number" 
                    required 
                    value={userInput.annualInvestment}
                    onChange={(event)=>handleInputChange('annualInvestment', event.target.value)}
                />
            </p>
        </div>
        <div className='input-group'>
            <p> 
                <label>Expected Return</label>
                <input type="number" 
                    required 
                    value={userInput.expectedReturn}
                    onChange={(event)=>handleInputChange('expectedReturn', event.target.value)}
                />
            </p>
            <p> 
                <label>Duration</label>
                <input type="number" 
                    required 
                    value={userInput.duration}
                    onChange={(event)=>handleInputChange('duration', event.target.value)}
                />
            </p>
        </div>
    </section>
  );
}

and in App.jsx add the UserInput component: 
import Header from './components/Header';
import UserInput from './components/UserInput';

export default function App() {
  return (
    <>
       <Header />
       <UserInput />
    </>
    
  );
}

Lifting the State Up:
---------------------
We need to show the Result in a new component and both UserInput 
and Result need the same set of values. So instead of having our state 
set in UserInput component we can move the state to App component so  
that it an be shared with both UserInput and Result component that we are 
trying to add newly to display our results. 

Results.jsx:
export default function Results({userInput}) {
    console.log(userInput);
    return (
       <p>Results....</p> 
    );
}

UserInput.jsx after moving state up:
function export default UserInput({onChange, userInput}) {
  return (
    <section id='user-input'> 
        <div className='input-group'>
            <p> 
                <label>Initial Investment</label>
                <input type="number" 
                    required 
                    value={userInput.initialInvestment}
                    onChange={(event)=>onChange('initialInvestment', event.target.value)}
                />
            </p>
            <p> 
                <label>Annual Investment</label>
                <input type="number" 
                    required 
                    value={userInput.annualInvestment}
                    onChange={(event)=>onChange('annualInvestment', event.target.value)}
                />
            </p>
        </div>
        <div className='input-group'>
            <p> 
                <label>Expected Return</label>
                <input type="number" 
                    required 
                    value={userInput.expectedReturn}
                    onChange={(event)=>onChange('expectedReturn', event.target.value)}
                />
            </p>
            <p> 
                <label>Duration</label>
                <input type="number" 
                    required 
                    value={userInput.duration}
                    onChange={(event)=>onChange('duration', event.target.value)}
                />
            </p>
        </div>
    </section>
  );
}

And our App.jsx with the state move here:
export default function App() {
  const [userInput, setUserInput] =useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: newValue
      };
    });
  }

  return (
    <>
       <Header />
       <UserInput onChange={handleInputChange} userInput={userInput} />
       <Results userInput={userInput} />
    </>
    
  );
}


Outputtig the results:
----------------------
Results.jsx:
import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Results({userInput}) {
    const resultsData=calculateInvestmentResults(userInput);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    console.log(resultsData);
    return (
       <table id='result'>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intrest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            <tbody>
                {resultsData.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    return <tr key={yearData.year}> 
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
       </table> 
    );
}

And to make sure that 0 or negative values are not entered in UserInput, in the 
App.jsx add the following validation:
const inputIsValid = userInput.duration>=1;

and conditionally output the results:
{!inputIsValid && <p className='center'>Please enter a duration greater than zero</p>}
{inputIsValid && <Results userInput={userInput} />}


```

## Styling React Components
```xml
Download 05-01-starting-project folder for inital project setup
Copy it to 05-02-starting-project-styling
This will be our working project

Go into the project folder and run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

When using vanilla (regular) CSS, it is not scoped to any particular 
component and the scope is global. 


Inline style in JSX code:
<p style={{color: 'red' textAlign: 'left'}}>

Conditional Inline style:
<input type='email' style={{backgroundColor: emailNotValid ? 'red': 'green'}} />

Conditional Inline style along with static styling: (use templating script)
<label className={`label ${emailNotValid? 'invalid': ''}`}> 

Exercise:
---------
Your task is to help out a colleague and style a h1 element dynamically (with inline styles) 
depending on which button was pressed.
If the "Yes" button is pressed, the h1 element should receive color: "green" as an inline style. 
If the "No" button is pressed, color: "red" should be applied.
Initially, when no button has been clicked yet, the color should be set to "white".
Important: You must use these specific colors ("green", "red", "white") - 
don't use any hex code or slight variations of these colors!

import {useState} from 'react';
function export default App() {
    const [buttonColor, setButtonColor] = useState('white');
    function handleButtonClick(color) {
        setButtonColor(color);
    }
    return (
    <div id="app">
      <h1 style={{color : buttonColor}}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={()=> handleButtonClick('green')}>Yes</button>
        </li>
        <li>
          <button onClick={()=> handleButtonClick('red')}>No</button>
        </li>
      </menu>
    </div>
  );
}

CSS Modules:
------------
This allows us to write Vanilla CSS but scoped to a particular component.
If we have a CSS file named Header.module.css 
then this indicate that this file will be included in the build process.

It will then be imported in our component as:
import {styles} from './Components/Header.module.css'

and this will be used in the component like:
<p className={styles.para}> Test </p>


Style components package:
-------------------------
Using this we can create our own style component package that can be applied to a 
particular Component. 

Add this to the project by running the command locally in your project folder:
npm install styled-components 

and then restart the server.

Next in our AuthInput.jsx add the following:

import { styled } from 'styled-components';

const ControlledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

Next use it in the same file, by replacing an existing <div></div>
as <ControlledContainer></ControlledContainer>

Note: styled.div will become a <div></div> during rendering and changing it 
to styled.p will render it as a <p></p>

Check AuthInput.jsx for more sample style components.



Conditional Styling:
const emailNotValid = submitted && !enteredEmail.includes('@');
<Label $invalid={passwordNotValid}>Password</Label>

and for conditional styling:
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color:${({$invalid}) => $invalid ? '#f87171' : '#6b7280'};
`

Note: Since 'invalid' is a default built in prop, we need to use $ before it 
to indicate that we are not reffering to this default prop. Otherwise $ can be 
omittied.

Check StyledHeader in Header.jsx
and Button in AuthInputs.jsx
Note: use & for sub styles for eg. 
.button:hover {
  background-color: #f0920e;
}
will be expressed as below as sub-element inside the Button constant: 
const Button = styled.button`
	padding: 1rem 2rem;
	font-weight: 600;
	......
	&:hover {
	  background-color: #f0920e;
	}
`

Splitting Button and Input into seperate components:
----------------------------------------------------
Move the Button component created in the AuthInputs.jsx to a seperate
file Button.jsx and use it within AuthInputs.jsx 

Move Label and Input component into Input.jsx and create a combined 
component called CustomInput in this file, combining both components together. 

```

## Tailwind CSS
```xml
Download 05-02-starting-project-styling folder for inital project setup
Copy it to 05-03-starting-project-tailwind
This will be our working project

Go into the project folder and run the following command to Install Tailwind:
npm install tailwindcss @tailwindcss/vite

Configure the Vite plugin
Add the @tailwindcss/vite plugin to your Vite configuration.
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

in our case the file looks like below after adding tailwind:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  
})

Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.
@import "tailwindcss";
(in our case we renamed the existing css file to old and created 
a new file with just the above line, saved it to index.css 
before running the below command)

In the project folder, run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

Also remove the previously added css components from Header.jsx,
and change the <StyledHeader> back to <header>

Next if you are using Visual Studio Code, then install the 
"Tailwind CSS Intelisense" extension for autocode complete.

Adding tailwind to our Header.jsx:
<header className='flex flex-col items-center mt-8 mb-16'>
  <img src={logo} alt="A canvas" className='mb-8 w-44 h-44 object-contain'/>
  <h1 className='text-4xl font-semibold tracking-widest text-center uppercase text-amber-800'>ReactArt</h1>
  <p className='text-stone-500'>A community of artists and art-lovers.</p>
</header>

Adding a new font:
in the index.css do the following:
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

@theme {
  --font-pacifico: "Pacifico", 'cursive'; 
}

Now we can use the font in the Header.jsx:
<h1 className='text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-pacifico'>ReactArt</h1>

Applying defaults as per screen size: 
<header className='flex flex-col items-center mt-8 mb-8 md:mb-16'>
This will apply mb-8 and only apply mb-16 for medium size screens

<h1 className='text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-pacifico'>ReactArt</h1>
Here we have text-xl md:text-4xl
This will apply text-xl and if the screen size is medium then it will apply the text-4xl 

We can apply similar styles to Button.jsx 
function export default Button({children, ...props}) {
    return (
        <button className='px-4 py-2 font-semibold uppercase rounded-b-sm text-stone-900 bg-amber-400 hover:bg-amber-500' {...props}>{children}</button>
    );
}

Next we can change our input class as below:
function export default Input({label, invalid, ...props}) {
    let labelClass = 'block mb-2 text-xs font-bold tracking-wide uppercase';
    let textClass = 'w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow';

    if(invalid) {
      labelClass += ' text-red-400';  
      textClass +=' bg-stone-400';
    }
    else {
      labelClass += ' text-stone-300';
      textClass +=' bg-stone-300';
    }

    return <p>
      <label className={labelClass}>{label}</label>
      <input className={textClass} {...props} />
    </p>
}

Next we change our AuthInputs.jsx file:
<div id="auth-inputs" className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient from-stone-700 to-stone-800'>
<button type="button" className='text-amber-400 hover:text-amber-500'>


```

## Debugging React Apps
```xml
Download 06-01-starting-project folder for inital project setup
Copy it to 06-02-starting-project-debugging
This will be our working project

In the project folder, run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

Debugging 1: 
------------
If we run the application everything will work fine until we enter a negative value 
for the duration. 

If we go to our developer console and check we get the below error: 
Uncaught TypeError: Cannot read properties of undefined (reading 'valueEndOfYear')
    at Results (Results.jsx:10:16)
    at react-stack-bottom-frame (react-dom_client.js?v=3f728218:17676:20)
    at renderWithHooks (react-dom_client.js?v=3f728218:4319:24)
    at updateFunctionComponent (react-dom_client.js?v=3f728218:6757:21)
    at beginWork (react-dom_client.js?v=3f728218:7803:20)
    at runWithFiberInDEV (react-dom_client.js?v=3f728218:1538:72)
    at performUnitOfWork (react-dom_client.js?v=3f728218:11057:98)
    at workLoopSync (react-dom_client.js?v=3f728218:10914:11)
    at renderRootSync (react-dom_client.js?v=3f728218:10896:15)
    at performWorkOnRoot (react-dom_client.js?v=3f728218:10537:46)


For the exception thrown it is pretty obvious that the error is in valueEndOfYear
in the results component. 
If we further look it shows that the line of the error as line no.10 

If we further check, we will know from the calculateInvestmentResults has 
a loop based on duration that will never get executed if the duration is less than 0

To fix this error, just after the calculateInvestmentResults is run, we will introduce 
a check to see if the results array gets values and if not we will display an error msg.
if(results.length===0) {
  return <p className="center">Invalid input entered </p>;
}

Debugging 2:
------------
If the inital investment is set as 15000 then the results displayed shows wierd values,
which must now be fixed. This does not show any error message on the debug console.

For debugging on the browser, in the developer console, go to the source tab -> Page
Here you will get a similar folder structure like our source code. 
Just go to the file you want to debug, in our case App.jsx which will open the source 
code on the right hand side tab.

Here we can click on the side to set the debug breakpoint and then inspect our result.
In our case we can clearly see that the "newvalue" that comes into this function is a 
string which performs string concat and not numerical arithmatic. 

To fix this, the entered newvalue in the handleChange function in App.jsx must be converted 
from string to numeric which can be achieved by changing the string to number as below by
using the Unary Plus Operator (+)
+newValue

Debugging 3:
------------
To simulate this error, make a change in Results.jsx by moving the results array outside of 
of the Results function like below: 

const results = [];
export default function Results({ input }) {
  ......
}

Now if we make any changes in the initial investment the results get appended (longer and longer)
and on the console we will see some new errors like below:
Encountered two children with the same key, `8`. 
Keys should be unique so that components maintain their identity across updates. 
Non-unique keys may cause children to be duplicated and/or omitted — the behavior 
is unsupported and could change in a future version.

This error will never surface until we enter a new value in our App. To identify this 
error during application start up, do the following in our index.jsx
import { StrictMode } from 'react';
ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode><App /></StrictMode>  
);

This will execute each and every component twice in development and this error will become 
immediately obvious. 

To fix this, we must reinitize 
const results = [] 
every time the component get reexecuted and do we need to move it back inside Results function.

So with stict mode we cannot indetify the error but will enable us to reexucte each component 
twice which will help us indentify bugs like this. 


Debugging 4:
------------
Install the React Developer Tool from your browser as extension tool. 
For chrome you can get it from the below link or search for Chrome Developer tool extension:
https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

Add this to your browser. 
With this installed, now in the developer tool, in the main tab you will find 2 new additions:
Profiler 
Components

In the components tab you will now see all your React Components, along with their state and hooks. 
Note: we will see Profiler tab later


```


## Refs & Portals
```xml
Download 07-01-starting-project folder for inital project setup
Copy it to 07-02-starting-project-refs
This will be our working project

In the project folder, run the following command:
npm install
npm run dev
Go to -> http://localhost:5173/ to see the running application page

To set the value of a h2 on button click we need to write the following code:
export default function Player() {
  const [name, setName]=useState('');
  const [submitted, setSubmitted]=useState(false);
  function handleNameChange(event) {
    setSubmitted(false);
    setName(event.target.value);
  }
  function handleClick() {
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? name:'unknown'} </h2>
      <p>
        <input type="text" onChange={handleNameChange} value={name}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

Same code using Ref:
import { useState, useRef} from "react"; 
export default function Player() {
  const playerName=useRef();
  const [name, setName]=useState(null);
  function handleClick() {
    setName(playerName.current.value);
    playerName.current.value = ''; // Clear is fine, but dont use it much to manipulating the dom
  }
  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown'} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

In React, both refs and state manage data within a component, 
but they differ in how they affect rendering and how they are used. 
State is used to manage data that can change and cause the component to 
re-render when updated, while refs are used to directly access and 
manipulate DOM elements or to store values that don't trigger re-renders

Ref in action - Timer Challenge
-------------------------------
Create a component called TimerChallenge:
import { useState, useRef } from 'react';

export default function TimerChallenge({title , targetTime}) {
  let timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  } 

  return (
    <section className="challenge" >
        <h2>{title}</h2>
        {timerExpired && <p >You lost!!!</p> }
        <p className="challenge-time">
            {targetTime} second{targetTime  > 1 ? 's' : '' }
        </p>
        <p>
            <button onClick={timerStarted ? handleStop: handleStart}>
              {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
            {timerStarted ? 'Time is running....' : 'Inactive !!!!'}
        </p>
    </section>
  );
}



Add it to App.jsx: 
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

export default function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Not Easy" targetTime={5}/>
        <TimerChallenge title="Getting Tough" targetTime={10}/>
        <TimerChallenge title="Pros Only" targetTime={15}/>
      </div>
    </>
  );
}


ResultModal.jsx: 



```


### Reference
```xml
freeCodeCamp.org. (2024b, December 17). 
Spring AI Full Course with Projects – Build Smarter Spring Boot Applications [Video]. 
YouTube. https://www.youtube.com/watch?v=9Crrhz0pm8s

React Reference Overview – React. (n.d.). 
https://react.dev/reference/react

Getting started. (n.d.). Vitejs. 
https://vite.dev/guide/

Maximilian Schwarzmüller
React - The Complete Guide 2025 (incl. Next.js, Redux). Udemy. 
https://www.udemy.com/course/react-the-complete-guide-incl-redux/

Academind. (n.d.). 
GitHub - academind/react-complete-guide-course-resources: 
React - The Complete Guide Course Resources (Code, Attachments, Slides). GitHub. 
https://github.com/academind/react-complete-guide-course-resources

freeCodeCamp.org. 
(2024, November 20). 
Learn React JS - full beginner’s tutorial & practice projects [Video]. 
YouTube. https://www.youtube.com/watch?v=x4rFhThSX04

Installing with Vite - Installation. (n.d.). 
Tailwind CSS. 
https://tailwindcss.com/docs/installation/using-vite

```
