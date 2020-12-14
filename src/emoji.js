import React from "react";

const Emoji = (props) => (
  <span
    onClick={() => props.clickHandlerForEmojis(props.emoji)}
    style={{
      marginRight: "1rem",
      fontSize: "150%",
      cursor: "pointer",
    }}
    key={props.emoji}
  >
    {props.emoji}
  </span>
);

export default Emoji;
