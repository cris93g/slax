import React from "react";

const Messages = props =>
  props.data.map(m =>
    m[0] !== "" ? (
      <li>
        <strong>{m[0]}</strong> : <div className="innermsg">{m[1]}</div>
      </li>
    ) : (
      <li className="update">{m[1]}</li>
    )
  );

export default Messages;
