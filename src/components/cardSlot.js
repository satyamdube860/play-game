import React from "react";

import ReactCardFlip from "react-card-flip";
import "./cardSlot.css";

const CardSlot = (props) => {
  return (
    <ReactCardFlip isFlipped={props.isFlipped} flipDirection="horizontal">
      <div className="CardFront CardStyle">
        <div className="front">Reveal the Card</div>
      </div>
      <div className="CardBack CardStyle">
        <img src={props.src} alt="Images_of" className="img_div" />
      </div>
    </ReactCardFlip>
  );
};
export default CardSlot;
