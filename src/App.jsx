import { useRef, useState } from "react";
import "./App.css";
import { CharacterAddSuggestions } from "./Components/ChractersAddSugestion";

function App() {
     let uppercase = useRef(0);
     let lowercase = useRef(0);
     let number = useRef(0);
     let symbols = useRef(0);
     let [password, setPassword] = useState("");
     let [range,setRange] = useState({
       uppercase: 4,
       lowercase: 4,
       number: 2,
       symbols: 2,
     });
  function handleRangeValue(totalPasswordLength) {
    range = totalPasswordLength;
    setRange(range)
    console.log("Will set range to:", totalPasswordLength);
  }
  function shuffleString(str) {
    const arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
  }

  function handleGenerateButton() {
     console.log(`The latest value of range is ${range}.`,range);
     // handleRangeValue();

    password = "";
    setPassword(password);
    let uppercaseValue = uppercase.current.checked;
    let lowercaseValue = lowercase.current.checked;
    let numberValue = number.current.checked;
    let symbolsValue = symbols.current.checked;

    if (uppercaseValue || lowercaseValue || numberValue || symbolsValue) {
      let str = "";
      if (uppercaseValue) {
        str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < range.uppercase; i++) {
          password += str.charAt(Math.floor(Math.random() * str.length));
        }
      }
      if (lowercaseValue) {
        str = "abcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < range.lowercase; i++) {
          password += str.charAt(Math.floor(Math.random() * str.length));
        }

      }
      if (numberValue) {
        str = "0123456789";
        for (let i = 0; i < range.number; i++) {
          password += str.charAt(Math.floor(Math.random() * str.length));
        }

      }
      if (symbolsValue) {
        str = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~/";
        for (let i = 0; i < range.symbols; i++) {
          password += str.charAt(Math.floor(Math.random() * str.length));
        }
      }
      setPassword(shuffleString(password));
      console.log(password);
    } else {
      alert("Check at least one.");
    }
  }

     console.log(`The latest value of range is ${range}.`, range);

  return (
    <>
      <div className="main">
        <b>Generate password 🔒</b>
        <div className="passwordShower">
          <div className="passwordContainer">
            {password || "Your password will appear here"}
          </div>
          <button className="copyButton">Copy</button>
        </div>
        <div className="characterContainer">
          <CharacterAddSuggestions
            suggestionType="uppercase"
            fromTo="(A-Z)"
            checkedValue={true}
            inputRef={uppercase}
            min={4}
            max={10}
            changeValue={handleRangeValue}
          />
          <CharacterAddSuggestions
            suggestionType="lowercase"
            fromTo="(a-z)"
            checkedValue={true}
            inputRef={lowercase}
            min={4}
            max={10}
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
