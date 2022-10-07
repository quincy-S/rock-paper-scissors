import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import StyledPlay, {
  StyledCard,
  StyledSection,
  StyledMessage,
} from "./StyledPlay";
import Tile from "../TIle/Tile";

const Play = ({ tileDetails, increaseScore, decreaseScore }) => {
  const { id } = useParams();
  const location = useLocation();
  const machineSelection = location.state;
  const navigate = useNavigate();
  const [message, setMessage] = useState(``);
  const userSelection = tileDetails.find((tile) => tile.type === id);

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      let choices = ["rock", "paper", "scissors"];
      let user = userSelection.type;
      let machine = machineSelection.type;
      if (user === machine) {
        setMessage("TIE");
      } else if (
        (user === choices[0] && machine === choices[2]) ||
        (user === choices[2] && machine === choices[1]) ||
        (user === choices[1] && machine === choices[0])
      ) {
        setMessage("YOU WIN");
        increaseScore();
      } else {
        setMessage("YOU LOSE");
        decreaseScore();
      }

      return () => {
        effectRan.current = true;
      };
    }
  }, []);

  return (
    <StyledPlay>
      <StyledSection>
        <StyledCard>
          <Tile type={userSelection.type} image={userSelection.image} />
          <h2>YOU PICKED</h2>
        </StyledCard>
        <StyledCard>
          <Tile type={machineSelection.type} image={machineSelection.image} />
          <h2>THE HOUSE PICKED</h2>
        </StyledCard>
      </StyledSection>
      <StyledMessage>
        <h1>{message}</h1>
        <button onClick={() => navigate(-1)}>PLAY AGAIN</button>
      </StyledMessage>
    </StyledPlay>
  );
};

export default Play;
