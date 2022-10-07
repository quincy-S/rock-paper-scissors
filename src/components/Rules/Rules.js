import React from "react";
import rulesImage from "../../assets/images/image-rules.svg";
import StyledRules, { StyledCloseImage, StyledImage } from "./StyledRules";
import closeImage from "../../assets/images/icon-close.svg";

const Rules = ({ show, toggleShow }) => {
  return (
    <StyledRules show={show}>
      <h1>RULES</h1>

      <StyledImage src={rulesImage} alt="rules-img" />
      <StyledCloseImage src={closeImage} alt="close-img" onClick={toggleShow} />
    </StyledRules>
  );
};

export default Rules;
