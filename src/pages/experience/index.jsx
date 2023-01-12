import StyledGridItem from "../../components/GridItem/styled/StyledGridItem";
import StyledTimelineContainer from "../../components/TimelineContainer/styled/StyledTimelineContainer";
import Title from "../../styled/Title.styled";

const Experience = ({ jobs }) => {
  return (
    <StyledGridItem id="Experience" gridArea="experience">
      <div>
        <Title>Experience</Title>
        <StyledTimelineContainer events={jobs} />
      </div>
    </StyledGridItem>
  );
};

export default Experience;
