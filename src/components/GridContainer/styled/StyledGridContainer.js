import styled from "styled-components";
import GridContainer from "..";

const StyledGridContainer = styled(GridContainer)`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto auto auto;
  grid-template-areas: "sidebar nav" "sidebar landing" "sidebar about" "sidebar experience" "sidebar projects" "sidebar contact";

  @media only screen and (max-width: 550px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto auto auto auto;
    grid-template-areas: "nav" "sidebar" "landing" "about" "experience" "projects" "contact";
  }
`;

export default StyledGridContainer;
