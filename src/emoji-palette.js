import React from "react";
import Emoji from "./emoji";

const EmojiPalette = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <div id="container-emoji">
        {props.emojis.map((emoji) => (
          <Emoji
            key={emoji}
            emoji={emoji}
            clickHandlerForEmojis={props.clickHandlerForEmojis}
          />
        ))}
      </div>
    </div>
  );
};

export default EmojiPalette;
