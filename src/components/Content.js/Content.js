import React, { useState } from "react";
import StyledContent from "./StyledContent";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Play from "../Play/Play";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import Rules from "../Rules/Rules";

const Content = () => {
  const [score, setScore] = useState(0);
  const tileDetails = [
    { type: "paper", image: paper, pos: "false" },
    { type: "scissors", image: scissors, pos: "false" },
    { type: "rock", image: rock, pos: "true" },
  ];
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prevValue) => !prevValue);
  }

  function increaseScore() {
    setScore((prevValue) => prevValue + 1);
  }

  function decreaseScore() {
    if (score === 0) {
      return;
    }
    setScore((prevValue) => prevValue - 1);
  }
  return (
    <StyledContent>
      <Rules show={show} toggleShow={toggleShow} />
      <Header score={score} />
      <Routes>
        <Route path="/" element={<Main tileDetails={tileDetails} />} />
        <Route
          path="/play/:id"
          element={
            <Play
              increaseScore={increaseScore}
              decreaseScore={decreaseScore}
              tileDetails={tileDetails}
            />
          }
        />
      </Routes>
      <Footer toggleShow={toggleShow} />
    </StyledContent>
  );
};

export default Content;
