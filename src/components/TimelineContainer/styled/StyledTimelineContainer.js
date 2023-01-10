import styled from "styled-components";
import TimelineContainer from "..";

const StyledTimelineContainer = styled(TimelineContainer)`
  list-style: none;
  flex-direction: column;
  align-items: center;
  margin: auto;
  position: relative;
  z-index: -2;
  @media (max-width: 550px) {
    flex-direction: column;
    width: 85vw;
  }
`;

export default StyledTimelineContainer;
