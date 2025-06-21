import react from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

import { CORE_CONCEPTS } from "./data.js";



function App() {
  let tabContent = "Initial value";
  function handleClick(selectedButton) {
    tabContent=selectedButton;
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleClick('Components')}>Components</TabButton>
            <TabButton onSelect={()=>handleClick('JSX')}>JSX</TabButton>
            <TabButton onSelect={()=>handleClick('Props')}>Props</TabButton>
            <TabButton onSelect={()=>handleClick('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
