import styled from "styled-components";

const StyledContent = styled.div`
  padding: 2rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export default StyledContent;
