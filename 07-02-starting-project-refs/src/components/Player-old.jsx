import { useState} from "react"; 
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
