import styled from "styled-components";
import StyledGridItem from "../../components/GridItem/styled/StyledGridItem";
import ProjectCard from "../../components/ProjectCard";
import Title from "../../styled/Title.styled";

const Projects = ({ projects }) => {
  return (
    <StyledGridItem gridArea="projects" id={"Projects"}>
      <div>
        <Title>Projects</Title>
        {projects.map((proj) => (
          <ProjectCard
            name={proj.name}
            link={proj.link}
            description={proj.description}
          />
        ))}
      </div>
    </StyledGridItem>
  );
};

export default Projects;
