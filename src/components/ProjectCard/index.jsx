import styled from "styled-components";
import LinkIcon from "@mui/icons-material/Link";

const ProjectCard = ({ name, link, description }) => {
  const Div = styled.div`
    background-color: black;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 1rem;
  `;

  const ProjectTitle = styled.p`
    font-size: var(--text-lvl-5);
  `;

  const Link = styled(LinkIcon)`
    font-size: var(--text-lvl-small);
    display: contents;
    :hover {
      cursor: pointer;
    }
  `;

  const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <Div>
      <SpaceBetween>
        <ProjectTitle>{name}</ProjectTitle>
        <a href={link} target="_blank">
          <Link />
        </a>
      </SpaceBetween>
      <p>{description}</p>
    </Div>
  );
};

export default ProjectCard;
