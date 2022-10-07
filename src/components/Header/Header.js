import React from "react";
import StyledHeader, { StyledScore, StyledSection } from "./StyledHeader";
import logo from "../../assets/images/logo.svg";

const Header = ({ score }) => {
  return (
    <StyledHeader>
      <StyledSection>
        <div>
          <img src={logo} alt="" />
        </div>

        <StyledScore>
          <h4>SCORE</h4>
          <h1>{score}</h1>
        </StyledScore>
      </StyledSection>
    </StyledHeader>
  );
};

export default Header;
