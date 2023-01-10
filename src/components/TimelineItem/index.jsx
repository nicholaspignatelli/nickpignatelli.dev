import styled from "styled-components";

const TimelineItem = ({
  title,
  company,
  description,
  durationArray,
  techStack,
  className,
}) => {
  const DateLabel = styled.li`
    @media (max-width: 550px) {
      :before {
        content: "${durationArray[0]} - ${durationArray[1]}";
        left: 0;
      }
    }
    :before {
      content: "${durationArray[0]} - ${durationArray[1]}";
      text-decoration: italic;
      left: calc(-3vw - 12rem);
    }
    :after {
      /* top: 0; */
      /* left: -2vw; */
      /* width: 10px; */
      /* height: 100%; */
      border-left: 2px solid #ccc;
      @media only screen and (max-width: 550px) {
        border-left: none;
      }
    }
  `;

  const JobTitle = styled.p`
    font-size: var(--text-lvl-4);
  `;

  const CompanyLabel = styled.p`
    font-size: var(--text-lvl-5);
    :before {
      content: "@ ";
    }
  `;

  const DescriptionPoint = styled.p`
    text-indent: -1rem;
    margin-left: 1rem;
    :before {
      content: "• ";
    }
  `;

  const Skill = styled.span`
    font-size: var(--text-lvl-small);
    background: var(--prime-color);
    color: var(--bg-color);
    margin-right: 1rem;
    margin-left: 1rem;
    letter-spacing: 0.03rem;
    :last-child {
      margin-right: 0;
    }

    padding: 0.1rem 0.2rem;
  `;

  const SkillRow = styled.div`
    /* text-overflow: ellipsis; */
    overflow: hidden;
    white-space: nowrap;
  `;

  return (
    <div className={className}>
      <DateLabel />
      <JobTitle>{title}</JobTitle>
      <CompanyLabel>{company}</CompanyLabel>
      {description.map((point) => (
        <DescriptionPoint>{point}</DescriptionPoint>
      ))}
      <SkillRow>
        {techStack.map((skill) => (
          <Skill>{skill}</Skill>
        ))}
      </SkillRow>
    </div>
  );
};
export default TimelineItem;
