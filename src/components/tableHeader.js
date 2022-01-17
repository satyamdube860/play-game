import React from "react";

import "./tableHeader.css";

const TableHeader = ({ id, slot_1, slot_2, slot_3, time }) => {
  return (
    <div className="Header_main_div">
      <div className="Header_item">{id}</div>
      <div className="Header_item">{slot_1}</div>
      <div className="Header_item">{slot_2}</div>
      <div className="Header_item">{slot_3}</div>
      <div className="Header_item">{time}</div>
    </div>
  );
};
export default TableHeader;
