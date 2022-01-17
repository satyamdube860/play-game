import React from "react";

import "./rowView.css";

const RowView = ({ id, slot_1, slot_2, slot_3, time }) => {
  return (
    <div className="Row_main_div">
      <div className="Row_item">{id}</div>
      <div className="Row_item">
        <img src={slot_1} alt="slot_1_img" height="35px" width="35px" />
      </div>
      <div className="Row_item">
        <img src={slot_2} alt="slot_2_img" height="35px" width="35px" />
      </div>
      <div className="Row_item">
        <img src={slot_3} alt="slot_3_img" height="35px" width="35px" />
      </div>
      <div className="Row_item">{time}</div>
    </div>
  );
};
export default RowView;
