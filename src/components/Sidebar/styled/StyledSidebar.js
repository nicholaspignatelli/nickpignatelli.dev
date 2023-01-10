import styled from "styled-components";
import Sidebar from "..";

const StyledSidebar = styled(Sidebar)`
  grid-area: sidebar;
  display: flow-root;
  flex-direction: column;
  justify-content: space-evenly;
  border-right: var(--accent-color) 0.1rem solid;
  position: relative;
  z-index: 1;
`;

export default StyledSidebar;
