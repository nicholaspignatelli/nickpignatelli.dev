import styled from "styled-components";

const StyledSubmitButton = styled.button`
  padding: var(--py) var(--px);
  border: 0.1rem solid var(--accent-color);
  background: var(--bg-color);
  color: var(--accent-color);
  transition: 0.16s ease-in-out;
  :hover {
    cursor: pointer;
    scale: 1.05;
  }
`;

export default StyledSubmitButton;
