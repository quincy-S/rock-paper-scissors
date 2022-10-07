import styled from "styled-components";

const StyledTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.type === "paper"
      ? "hsl(230, 89%, 62%)"
      : props.type === "rock"
      ? "hsl(349, 71%, 52%)"
      : props.type === "scissors"
      ? "hsl(39, 89%, 49%)"
      : ""};

  div {
    background-color: white;
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    height: 10rem;
    width: 10rem;

    div {
      height: 7rem;
      width: 7rem;
    }

    img {
      width: 3.5rem;
    }
  }
`;

export default StyledTile;
