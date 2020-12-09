import React, { useState } from "react";
import "./styles.css";

//JS object or dictionary, we create dictionary in JS using object
var emojiDictionary = {
  "😀": "Grinning",
  "😉": "Winking",
  "🥳": "Partying",
  "🤓": "Nerd",
  "😕": "Confused",
  "😟": "Worried",
  "😲": "Astonished",
  "🥺": "Pleading",
  "😖": "Confounded",
  "😫": "Tired",
  "🤥": "Lying",
  "😑": "Expressionless",
  "😪": "Sleepy",
  "🤧": "Sneezing",
  "😒": "Unamused",
  "🤯": "Exploding head",
  "😨": "Fearful",
  "🥰": "Smiling with heart",
  "🤪": "Zany",
  "😝": "Squinting",
  "🤗": "Hugging",
  "🤔": "Thinking",
  "😬": "Grimacing",
  "😣": "Persevering",
  "👨‍🌾": "Farmer",
  "👨‍💻": "Technologist",
  "👩‍🎤": "Singer",
  "👩‍🚒": "Firefighter",
  "💂": "Guard",
  "🧚": "Fairy",
  "🧛": "Vampire",
  "🧜‍♀️": "Mermaid",
  "👨‍✈️": "Pilot",
  "👩‍🎨": "Artist",
};

//to get an array of keys from an object
var emojisWeHave = Object.keys(emojiDictionary);

export default function App() {
  const [inputValue, setInputValue] = useState("Meaning will be shown here..."); //we pass the default value of the argument using useState, in this case default value of input is blank("")

  function eventHandlerForInputChange(event) {
    // console.log(event.target); // this will print the html element on console
    // console.log(event.target.value); // this will print the value in the input element on console

    var inputEmoji = event.target.value;

    // Conditions in JSX
    if (inputEmoji in emojiDictionary)
      setInputValue(emojiDictionary[inputEmoji]);
    else if (inputEmoji === "") {
      setInputValue("Meaning will be shown here..."); //if we remove the emoji from the input box then we'll set the meaning of the emoji to blank otherwise it'll set the meaning as We don't have the moji in our DB
    } else {
      setInputValue(
        "Sorry! We don't have this, Please enter any of the listed emojis to know the meaning"
      ); //this is to set the new input value using useState
    }
  }

  //event handler or callback or functionality for emoji click
  function clickHandlerForEmojis(emoji) {
    setInputValue(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <nav>
        <h1>Emoji Interpreter</h1>
      </nav>

      <main>
        <header>
          {/* <img src="emoji.jpg" alt="header-emoji" /> */}
          <span>😎</span>
          <h3>Understand emojis in a better way</h3>
        </header>

        <input
          onChange={eventHandlerForInputChange}
          placeholder="Please enter emoji to know meaning..."
        ></input>

        <div id="output">{inputValue}</div>

        <h4>Emojis we have currently</h4>
        <div id="container-emoji">
          {emojisWeHave.map((emoji) => (
            <span
              onClick={() => clickHandlerForEmojis(emoji)}
              style={{
                marginRight: "1rem",
                fontSize: "150%",
                cursor: "pointer",
              }}
              key={emoji}
            >
              {emoji}
            </span>
          ))}
        </div>
      </main>

      <footer>
        <div>About</div>
        <p>
          Are you confused with emojis? Use our interpreter to know the meaning
          of an emoji before using it
        </p>
        <p>
          Made with ❤️ by
          <a className="footer-link" href="https://github.com/sjsouvik">
            Souvik
          </a>
        </p>
      </footer>
    </div>
  );
}
