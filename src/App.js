import React, { useState } from "react";
import "./styles.css";
import Main from "./main-component";
import emojiDictionary from "./data/emoji-data";

//to get an array of keys from an object
var emojisWeHave = Object.keys(emojiDictionary);

//Navigation component
const Navigation = ({ heading }) => {
  return (
    <nav>
      <h1>{heading}</h1>
    </nav>
  );
};

//Footer component
const Footer = (props) => (
  <footer>
    <div>{props.title}</div>
    <p>{props.description}</p>
    <p>
      Made with ❤️ by
      <a className="footer-link" href="https://github.com/sjsouvik">
        Souvik
      </a>
    </p>
  </footer>
);

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
      <Navigation heading={"Emoji Interpreter"} />

      <Main
        emojisWeHave={emojisWeHave}
        meaning={inputValue}
        clickHandlerForEmojis={clickHandlerForEmojis}
        eventHandlerForInputChange={eventHandlerForInputChange}
      />

      <Footer
        title={"About"}
        description={
          "Are you confused with emojis? Use our interpreter to know the meaning of an emoji before using it"
        }
      />
    </div>
  );
}
