import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] =useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration>=1;

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue
      };
    });
  }
  return (
    <>
       <Header />
       <UserInput onChange={handleInputChange} userInput={userInput} />
       {!inputIsValid && <p className='center'>Please enter a duration greater than zero</p>}
       {inputIsValid && <Results userInput={userInput} />}
    </>
    
  );
}

export default App
