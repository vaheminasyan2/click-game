import React from "react";
import "./imageCard.css";

function ImageCard(props) {
  
  return (
      <div className="card m-4 lg-sm-md" 
        onClick={()=> props.shuffleImages(props)}>
        <img className="card-img-top" alt={props.name} src={props.image} />
      </div>
    
  );
}

export default ImageCard;
