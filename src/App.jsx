import { useRef, useState } from "react";
import "./App.css";
import { CharacterAddSuggestions } from "./Components/ChractersAddSugestion";

function App() {
  let uppercase = useRef(0);
  let lowercase = useRef(0);
  let number = useRef(0);
  let symbols = useRef(0);

  const [range, setRange] = useState(12);
  function handleRangeValue(totalPasswordLength) {
    setRange(totalPasswordLength);
    console.log("Will set range to:", totalPasswordLength);
  }

Happy from backend
  function handleGenerateButton() {
    let uppercaseValue = uppercase.current.checked;
    let lowercaseValue = lowercase.current.checked;
    let numberValue = number.current.checked;
    let symbolsValue = symbols.current.checked;

    if (uppercaseValue || lowercaseValue || numberValue || symbolsValue) {
      console.log("Checked!");
      let password = "";
      let str = "";
      if (uppercaseValue) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(str);

      for(let i = 0; i<str.length;i++){
          password += Math.floor(Math.random()*16);
          console.log(password);

      }
      if (lowercaseValue) str += "abcdefghijklmnopqrstuvwxyz";
      if (numberValue) str += "0123456789";
      if (symbolsValue) str += "!@#$%^&*()-_=+[]{}|;:',.<>?/`~/";
    } else {
      alert("Check at least one.");
    }
  }

  return (
    <>
      <div className="main">
        <b>Generate password 🔒</b>
        <div className="passwordShower">
          <div className="passwordContainer"></div>
          <button className="copyButton">Copy</button>
        </div>
        <div className="characterContainer">
          <CharacterAddSuggestions
            suggestionType="uppercase"
            fromTo="(A-Z)"
            checkedValue={true}
            inputRef={uppercase}
            min={4}
            max={8}
            changeValue={handleRangeValue}
          />
          <CharacterAddSuggestions
            suggestionType="lowercase"
            fromTo="(a-z)"
            checkedValue={true}
            inputRef={lowercase}
            min={4}
            max={8}
            changeValue={handleRangeValue}
          />
          <CharacterAddSuggestions
            suggestionType="number"
            fromTo="(0-9)"
            checkedValue={true}
            inputRef={number}
            min={2}
            max={6}
            changeValue={handleRangeValue}
          />
          <CharacterAddSuggestions
            suggestionType="symbols"
            fromTo="(!@#$%^&*)"
            checkedValue={false}
            inputRef={symbols}
            min={2}
            max={6}
            changeValue={handleRangeValue}
          />
        </div>
        <button
          className="generateButton"
          onClick={() => handleGenerateButton()}
        >
          Generate
        </button>
      </div>
    </>
  );
}

export default App;
