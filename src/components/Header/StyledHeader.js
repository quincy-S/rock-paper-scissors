import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 40rem;
`;

export const StyledSection = styled.section`
  border: 4px solid hsl(217, 16%, 45%);
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 7rem;
  }
`;

export const StyledScore = styled.div`
  padding: 5px 20px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: hsl(229, 25%, 31%);
    font-size: 3rem;
  }

  h4 {
    font-size: 0.8rem;
    color: hsl(229, 64%, 46%);
    letter-spacing: 2px;
  }
`;

export default StyledHeader;
