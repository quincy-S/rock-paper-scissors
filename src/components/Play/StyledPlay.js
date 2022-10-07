import styled from "styled-components";

const StyledPlay = styled.section`
  max-width: 35rem;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;

  h2 {
    font-size: 1rem;
    letter-spacing: 1px;
    color: white;
    font-weight: lighter;
  }
`;

export const StyledSection = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const StyledMessage = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  h1 {
    color: white;
    font-size: 3.5rem;
  }

  button {
    border-radius: 10px;
    padding: 1rem 3rem;
    letter-spacing: 5px;
    ${"" /* font-weight: 600; */}
    font-size: 1rem;
    color: hsl(214, 47%, 23%);
    border: none;
    background-color: white;
  }
`;

export default StyledPlay;
