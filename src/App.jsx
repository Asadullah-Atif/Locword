import { useRef, useState } from "react";
import "./App.css";
import { CharacterAddSuggestions } from "./Components/ChractersAddSugestion";

function App() {
  let uppercase = useRef(null);
  let lowercase = useRef(null);
  let number = useRef(null);
  let symbols = useRef(null);
  let passwordCopy = useRef(null);
  let [password, setPassword] = useState("");
  let [range, setRange] = useState({
    uppercase: 4,
    lowercase: 4,
    number: 2,
    symbols: 2,
  });

  function handleRangeValue(totalPasswordLength) {
    setRange(totalPasswordLength);
  }
  function randomString(string, count) {
    for (let i = 0; i < count; i++) {
      password += string.charAt(Math.floor(Math.random() * string.length));
    }
    return setPassword(password);
  }
  function shuffleString(str) {
    const arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
  }
  function handleCopyButton() {
    navigator.clipboard.writeText(password);
  }
  function handleGenerateButton() {
     password = "";
    setPassword(password);
    let uppercaseValue = uppercase.current.checked;
    let lowercaseValue = lowercase.current.checked;
    let numberValue = number.current.checked;
    let symbolsValue = symbols.current.checked;

    if (uppercaseValue || lowercaseValue || numberValue || symbolsValue) {
      if (uppercaseValue)
        randomString("ABCDEFGHIJKLMNOPQRSTUVWXYZ", range.uppercase);
      if (lowercaseValue)
        randomString("abcdefghijklmnopqrstuvwxyz", range.lowercase);
      if (numberValue) randomString("0123456789", range.number);
      if (symbolsValue)
        randomString("!@#$%^&*()-_=+[]{}|;:',.<>?/`~/", range.symbols);
      setPassword(shuffleString(password));
    } else {
      alert("Check at least one.");
    }
  }
  return (
    <>
      <img src="/Logo (1).png" alt="Logo of the company." width={100} />
      <div className="main">
        <b>Generate password 🔒</b>
        <div className="passwordShower">
          <div ref={passwordCopy} className="passwordContainer">
            {password || "Password will appear here"}
          </div>
          <button className="copyButton" onClick={handleCopyButton} disabled={!password}>
            Copy
          </button>
        </div>
        <div className="characterContainer">
          <CharacterAddSuggestions
            suggestionType="uppercase"
            checkedValue={true}
            inputRef={uppercase}
            min={4}
            max={8}
            changeValue={handleRangeValue}
            autoFocus={true}
          />
          <CharacterAddSuggestions
            suggestionType="lowercase"
            checkedValue={true}
            inputRef={lowercase}
            min={4}
            max={8}
            changeValue={handleRangeValue}
          />
          <CharacterAddSuggestions
            suggestionType="number"
            checkedValue={true}
            inputRef={number}
            min={2}
            max={5}
            changeValue={handleRangeValue}
          />
          <CharacterAddSuggestions
            suggestionType="symbols"
            checkedValue={false}
            inputRef={symbols}
            min={2}
            max={5}
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
      <h6>Made By Asadullah. ©</h6>
    </>
  );
}

export default App;
