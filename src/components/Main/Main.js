import React from "react";
import StyledMain, { StyledItem, StyledSection } from "./StyledMain";

import Tile from "../TIle/Tile";
import { Link } from "react-router-dom";

const Main = ({ tileDetails }) => {
  let randNum = Math.floor(Math.random() * 2);
  const machineSelection = tileDetails[randNum];

  return (
    <StyledMain>
      <StyledSection>
        {tileDetails.map((tile) => (
          <StyledItem key={tile.type} last={tile.pos} type={tile.type}>
            <Link to={`play/${tile.type}`} state={machineSelection}>
              <Tile image={tile.image} type={tile.type} />
            </Link>
          </StyledItem>
        ))}
      </StyledSection>
    </StyledMain>
  );
};

export default Main;
