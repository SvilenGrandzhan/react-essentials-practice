import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = input.duration >= 1;

  const inputHandler = (inputIdentifier, newValue) => {
    setInput((previousInput) => {
      return {
        ...previousInput,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput
        input={input}
        onInput={inputHandler}
      />
      {isValidInput ? <Results input={input} /> : <p className="center">Enter valid input</p>}
    </>
  );
}

export default App;
