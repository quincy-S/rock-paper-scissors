import styled from "styled-components";

const StyledRules = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${"" /* gap: 6rem; */}
  padding-top: 4rem;
  display: ${(props) => (props.show === true ? `flex` : `none`)};

  @media (min-width: 768px) {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 0%;
    top: 25%;
    bottom: 50%;
    height: 50%;
    width: 30rem;
    padding-top: 0;
    border-radius: 5px;
  }
`;

export const StyledImage = styled.img`
  margin: auto;
`;

export const StyledCloseImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;
export default StyledRules;
