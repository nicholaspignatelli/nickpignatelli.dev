import styled from "styled-components";

const StyledListItem = styled.li`
  padding: var(--py) var(--px);
  transition: all 0.16s ease-in-out;

  :hover {
    cursor: pointer;
    color: var(--bg-color);
    background-color: var(--prime-color);
    font-weight: bolder;
  }
`;

export default StyledListItem;
