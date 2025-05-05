# 🔐 Password Generator App

A customizable **password generator** built with **React** that allows users to generate secure and randomized passwords based on selected character types and quantities.

---

## 🚀 Purpose

Strong passwords are critical to digital security. This app provides a user-friendly interface to generate complex passwords with control over:

- ✅ Uppercase letters
- ✅ Lowercase letters
- ✅ Numbers
- ✅ Symbols

---

## 🛠️ Features

- ✅ **Character Type Selection** – Enable or disable character types.
- 🔢 **Custom Ranges** – Choose the number of characters for each type.
- 🔄 **Fisher-Yates Shuffle** – Ensures character randomness.
- 📋 **Copy to Clipboard** – Copy password with one click.
- 🧠 **Live Updates** – UI reflects real-time user preferences.
- 💡 **Modular Components** – Uses reusable `CharacterAddSuggestions` component.

---

## 🧩 Technologies Used

- **React.js**
- **JavaScript (ES6+)**
- **CSS**
- **Clipboard API**
- **React Hooks** (`useRef`, `useState`)

---

## 🧪 How It Works

### Password Generation Process

1. **User selects** character types via checkboxes.
2. **Character count** for each type is determined by range sliders.
3. **Characters are randomly picked** using `randomString()`:
   ```js
   function randomString(string, count) {
     for (let i = 0; i < count; i++) {
       password += string.charAt(Math.floor(Math.random() * string.length));
     }
     return setPassword(password);
   }
