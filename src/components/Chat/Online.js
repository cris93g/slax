import React from "react";

const Online = props => props.data.map(m => <li>{m[1]}</li>);

export default Online;
