import styled from "styled-components";
import triangle from "../../assets/images/bg-triangle.svg";

const StyledMain = styled.section`
  max-width: 40rem;
  width: 100%;
  flex: 1;

  display: flex;
  align-items: center;
`;

export const StyledSection = styled.section`
  display: grid;

  max-width: 40rem;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  background-size: 50% 50%;
  background-image: url(${triangle});
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 1440px) {
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

export const StyledItem = styled.div`
  grid-column: ${(props) => (props.last === "true" ? `1/-1` : ``)};
  display: flex;
  justify-content: center;
`;
export default StyledMain;
