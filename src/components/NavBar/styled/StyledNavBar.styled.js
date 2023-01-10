import styled from "styled-components";
import NavBar from "..";
// was Topbar
const StyledNavBar = styled(NavBar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  background: linear-gradient(179.8deg, #000000aa, #00000000);
  grid-area: nav;
`;

export default StyledNavBar;
