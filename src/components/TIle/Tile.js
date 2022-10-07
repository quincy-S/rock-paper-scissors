import React from "react";
import StyledTile from "./StyledTIle";

const Tile = ({ image, type }) => {
  return (
    <StyledTile type={type}>
      <div>
        <img src={image} alt="tile-img" />
      </div>
    </StyledTile>
  );
};

export default Tile;
