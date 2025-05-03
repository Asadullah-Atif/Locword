import { useRef, useState } from "react";
import "./App.css";
import { CharacterAddSuggestions } from "./Components/ChractersAddSugestion";

function App() {
  let uppercase = useRef(0);
  let lowercase = useRef(0);
  let number = useRef(0);
  let symbols = useRef(0);
  let range = useRef(0);

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
            suggestionType="Uppercase"
            fromTo="(A-Z)"
            checkedValue={true}
            inputRef={uppercase}
            min={4}
            max={8}
          />
          <CharacterAddSuggestions
            suggestionType="Lowercase"
            fromTo="(a-z)"
            checkedValue={true}
            inputRef={lowercase}
            min={4}
            max={8}
          />
          <CharacterAddSuggestions
            suggestionType="Number"
            fromTo="(0-9)"
            checkedValue={true}
            inputRef={number}
            min={2}
            max={6}
          />
          <CharacterAddSuggestions
            suggestionType="Symbols"
            fromTo="(!@#$%^&*)"
            checkedValue={false}
            inputRef={symbols}
            min={2}
            max={6}
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
