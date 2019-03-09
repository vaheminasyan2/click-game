import React from "react";
import "./wrapper.css";

function Wrapper(props) {
  return <div className="container">{props.children}</div>;
}

export default Wrapper;
