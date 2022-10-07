import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 2rem;
  display: flex;

  justify-content: center;
  width: 100%;
  button {
    border-radius: 10px;
    padding: 1rem 3rem;
    letter-spacing: 5px;

    font-size: 1rem;
    color: white;
    border: 3px solid hsl(217, 16%, 45%);
    background-color: hsl(214, 47%, 23%);
  }

  @media (min-width: 768px) {
    max-width: 1440px;

    button {
      margin-left: auto;
    }
  }
`;

export default StyledFooter;
