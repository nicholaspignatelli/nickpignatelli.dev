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
      content: "at ";
    }
  `;

  const DescriptionPoint = styled.p`
    /* gives us visual separation between job description points */
    :after {
      content: "";
      display: block;
      margin-bottom: 0.5rem;
    }
  `;

  const Description = styled.div`
    margin-left: 1rem;
  `;

  const Skill = styled.div`
    font-size: var(--text-lvl-small);
    border: 0.03rem solid var(--prime-color-a50);
    border-radius: 0.33rem;
    color: var(--prime-color);
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;

    letter-spacing: 0.03rem;
    :last-child {
      margin-right: 0;
    }

    padding: 0.2rem 0.33rem;
  `;

  return (
    <div className={className}>
      <DateLabel />
      <JobTitle>{title}</JobTitle>
      <CompanyLabel>{company}</CompanyLabel>
      <Description>
        {description.map((point) => (
          <DescriptionPoint>{point}</DescriptionPoint>
        ))}
      </Description>
      {techStack.map((skill) => (
        <Skill>{skill}</Skill>
      ))}
    </div>
  );
};
export default TimelineItem;
