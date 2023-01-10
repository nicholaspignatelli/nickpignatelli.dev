import styled from "styled-components";
import GridItem from "..";

const StyledGridItem = styled(GridItem)`
  :before {
    content: "";
    margin-top: 6vh;
  }
  :after {
    content: "";
    margin-bottom: 50vh;
  }
  grid-area: ${(props) => props.gridArea};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: var(--py) var(--px);
`;

export default StyledGridItem;
