import { useState } from "react";

let objOfLength = {
  uppercase: 4,
  lowercase: 4,
  number: 2,
  symbols: 2,
};
export function CharacterAddSuggestions({
  suggestionType,
  fromTo,
  checkedValue,
  inputRef,
  min,
  max,
  changeValue,
}) {
  let [checkboxValue, setCheckboxValue] = useState(checkedValue);
  let [value, setValue] = useState(min);

  function handleCheckbox() {
    if (checkboxValue) {
      setCheckboxValue(false);
    } else {
      setCheckboxValue(true);
    }
  }
  function handleValue(e) {
    if (e.key === "ArrowUp" && value < max) {
      setValue(value + 1);

      let current = e.target.id;
      console.log(current);

      switch (current) {
        case "uppercase":
          objOfLength.uppercase = objOfLength.uppercase + 1;
          console.log(objOfLength.uppercase);
          break;
        case "lowercase":
          objOfLength.lowercase++;
          console.log(objOfLength.lowercase);
          break;
        case "number":
          objOfLength.number++;
          console.log(objOfLength.number);
          break;
        case "symbols":
          objOfLength.symbols++;
          console.log(objOfLength.symbols);
          break;
      }
    }
    if (e.key === "ArrowDown" && value > min) {
      setValue(value - 1);
      let current = e.target.id;
      switch (current) {
        case "uppercase":
          objOfLength.uppercase--;
          console.log(objOfLength.uppercase);
          break;
        case "lowercase":
          objOfLength.lowercase--;
          console.log(objOfLength.lowercase);
          break;
        case "number":
          objOfLength.number--;
          console.log(objOfLength.number);
          break;
        case "symbols":
          objOfLength.symbols--;
          console.log(objOfLength.symbols);
          break;
      }
    }
    changeValue(objOfLength);
  }
  return (
    <div className={`grid-three ${suggestionType}`}>
      <input
        type="checkbox"
        name={suggestionType}
        checked={checkboxValue}
        onClick={handleCheckbox}
        ref={inputRef}
      />
      <label htmlFor={suggestionType} className="labelForChar">
        Include {suggestionType} {fromTo}
      </label>
      <div className="lengthContainer" style={{ margin: "auto" }}>
        <label htmlFor={suggestionType} className="labelForChar">
          Length:{" "}
        </label>
        <input
          id={suggestionType}
          type="number"
          min={min}
          max={max}
          value={value}
          onKeyDown={(e) => handleValue(e)}
          autoFocus
        />
      </div>
    </div>
  );
}
