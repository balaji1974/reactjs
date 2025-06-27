
import {useState} from "react";
import {EXAMPLES} from "../data.js";
import TabButton from "./TabButton.jsx";

function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
        
    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleClick('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleClick('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleClick('state')}>State</TabButton>
            </menu>
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
        </section>
    );
}
export default Examples;