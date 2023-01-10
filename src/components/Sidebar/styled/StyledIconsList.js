import styled from "styled-components";
import IconsList from "../components/IconsList";

const StyledIconsList = styled(IconsList)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  @media only screen and (max-width: 550px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: absolute;
  }
`;

export default StyledIconsList;
