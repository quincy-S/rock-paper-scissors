import React from "react";
import StyledFooter from "./StyledFooter";

const Footer = ({ toggleShow }) => {
  return (
    <StyledFooter>
      <button onClick={() => toggleShow()}>RULES</button>
    </StyledFooter>
  );
};

export default Footer;
