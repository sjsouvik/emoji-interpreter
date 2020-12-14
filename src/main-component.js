import React from "react";
import EmojiPalette from "./emoji-palette";

//Hero component
function Hero(props) {
  return (
    <header>
      {/* <img src="emoji.jpg" alt="header-emoji" /> */}
      <span>😎</span>
      <h3>{props.title}</h3>
    </header>
  );
}

//Main component
const Main = (props) => {
  return (
    <main>
      <Hero title={"Understand emojis in a better way"} />
      <input
        onChange={props.eventHandlerForInputChange}
        placeholder="Please enter emoji to know meaning..."
      ></input>

      <div id="output">{props.meaning}</div>

      <EmojiPalette
        title={"Emojis we have currently"}
        emojis={props.emojisWeHave}
        clickHandlerForEmojis={props.clickHandlerForEmojis}
      />
    </main>
  );
};

export default Main;
