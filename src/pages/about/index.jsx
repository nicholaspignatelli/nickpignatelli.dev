import styled from "styled-components";
import Title from "../../styled/Title.styled";
import StyledGridItem from "../../components/GridItem/styled/StyledGridItem";
import StyledSkill from "../../components/Skill/styled/StyledSkill";
import about from "../../data/about";

const About = () => {
  const ThreeByTwoGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    place-items: center;
    @media only screen and (max-width: 550px) {
      grid-template-columns: auto;
    }
  `;

  return (
    <>
      <StyledGridItem gridArea="about" id="About">
        <div>
          <Title>About</Title>
          <p style={{ fontSize: "var(--text-lvl-4" }}>Skills</p>
          <p>Languages, tools, technologies, and the like!</p>
          <br />
          <ThreeByTwoGrid>
            {about.skills.map(({ name, logoUrl }) => (
              <StyledSkill name={name} logoUrl={logoUrl} />
            ))}
          </ThreeByTwoGrid>
        </div>
      </StyledGridItem>
    </>
  );
};

export default About;
