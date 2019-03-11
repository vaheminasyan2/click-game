import React from "react";
import "./title.css";

function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">Click an image to begin!</h1>
        <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
        <br></br>
        <p className="scores text-center">Score:{props.score} | Top score: {props.topScore}</p>
  </div>
</div>
  )
}

export default Title;
