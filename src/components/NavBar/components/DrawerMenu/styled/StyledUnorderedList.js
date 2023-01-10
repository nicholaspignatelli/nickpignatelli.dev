import styled from "styled-components";

const StyledUnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: var(--py) var(--px);

  @media only screen and (max-width: 550px) {
    display: inline;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
  }
`;

export default StyledUnorderedList;
