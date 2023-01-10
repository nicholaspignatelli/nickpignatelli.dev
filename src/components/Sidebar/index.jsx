import StyledIconsList from "./styled/StyledIconsList";
import StyledIconLink from "./styled/StyledIconLink.js";
import StyledGitHubIcon from "./styled/StyledGitHubIcon.js";
import StyledLinkedInIcon from "./styled/StyledLinkedInIcon.js";
import StyledAssignmentIcon from "./styled/StyledAssignmentIcon.js";

const Sidebar = ({ className }) => {
  return (
    <div className={className}>
      <StyledIconsList>
        <StyledIconLink
          url="https://linkedin.com/in/nickpignatelli"
          target="_blank"
        >
          <StyledLinkedInIcon fontSize="large" />
        </StyledIconLink>
        <StyledIconLink
          url="https://github.com/nicholaspignatelli"
          target="_blank"
        >
          <StyledGitHubIcon fontSize="large" />
        </StyledIconLink>
        <StyledIconLink
          url="https://drive.google.com/uc?export=download&id=1LmNjR3Ol2-lMNs9lIW0-GWGmxYNWrVRU"
          download
        >
          <StyledAssignmentIcon fontSize="large" />
        </StyledIconLink>
      </StyledIconsList>
    </div>
  );
};

export default Sidebar;
