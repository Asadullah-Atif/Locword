import { useState } from "react";

export function CharacterAddSuggestions({
  suggestionType,
  fromTo,
  checkedValue,
  inputRef,
  min,
  max,
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
    }
    if (e.key === "ArrowDown" && value > min) {
      setValue(value - 1);
    }
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
          type="number"
          min={min}
          max={max}
          value={value}
          onKeyDown={handleValue}
          autoFocus
        />
      </div>
    </div>
  );
}
