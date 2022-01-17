import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Divider from "@material-ui/core/Divider";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <Divider variant="middle" />
      <div className="footer_main">
        <CopyrightIcon /> Poker Buz 1997-2021
      </div>
    </div>
  );
};
export default Footer;
