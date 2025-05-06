import { useState } from "react";
export function CharacterAddSuggestions({
  suggestionType,
  fromTo,
  checkedValue,
  inputRef,
  min,
  max,
  autoFocus = false,
  range,
  setRange,
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
      console.log("Hi");

      setValue(value + 1);

      let current = e.target.id;

      switch (current) {
        case "uppercase":
          range.uppercase += 1;
          setRange(range);
          break;
        case "lowercase":
          range.lowercase += 1;
          setRange(range);
          break;
        case "number":
          range.number += 1;
          setRange(range);
          break;
        case "symbols":
          range.symbols += 1;
          setRange(range);
          break;
      }
    }
    if (e.key === "ArrowDown" && value > min) {
      console.log("Hi");

      setValue(value - 1);
      let current = e.target.id;
      switch (current) {
        case "uppercase":
          range.uppercase += 1;
          setRange(range);
          break;
        case "lowercase":
          range.lowercase += 1;
          setRange(range);
          break;
        case "number":
          range.number += 1;
          setRange(range);
          break;
        case "symbols":
          range.symbols += 1;
          setRange(range);
          break;
      }
    }
  }
  return (
    <div className={`grid-three ${suggestionType}`}>
      <div className="inputDiv">
        <input
          type="checkbox"
          name={suggestionType}
          checked={checkboxValue}
          onClick={handleCheckbox}
          ref={inputRef}
        />
      </div>
      <label htmlFor={suggestionType} className="labelForChar">
        Include {suggestionType} {fromTo}
      </label>
      <div className="lengthContainer" style={{ margin: "auto" }}>
        <input
          id={suggestionType}
          type="number"
          min={min}
          max={max}
          value={value}
          onKeyDown={(e) => handleValue(e)}
          autoFocus={autoFocus}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}
