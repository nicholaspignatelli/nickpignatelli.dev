import styled from "styled-components";
import Title from "../../styled/Title.styled";
import StyledGridItem from "../../components/GridItem/styled/StyledGridItem";

const About = () => {
  const Skill = ({ name, logoUrl, className }) => (
    <div className={className}>
      <p style={{ fontSize: "1.5rem" }}>{name}</p>
      <img width={75} src={logoUrl} alt={name} />
    </div>
  );
  const StyledSkill = styled(Skill)`
    padding: var(--px);
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    place-items: center;
    margin-bottom: 1rem;
    padding: var(--py) var(--px);
    color: var(--prime-color);
    height: auto;
  `;

  const SingleColumn = styled.div`
    display: grid;
    grid-template-columns: auto;
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

          <SingleColumn>
            <StyledSkill
              name="node.js"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            />
            <StyledSkill
              name="HTML"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            />
            <StyledSkill
              name="CSS"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            />
            <StyledSkill
              name="JavaScript"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            />
            <StyledSkill
              name="AWS"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            />
            <StyledSkill
              name="Postman"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png"
            />
            <StyledSkill
              name="express.js"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            />
            <StyledSkill
              name="Mongo DB"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
            />
            <StyledSkill
              name="git"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
            />

            <StyledSkill
              name="JIRA"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg"
            />
            <StyledSkill
              name="Kafka"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg"
            />
            <StyledSkill
              name="React"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            />
            <StyledSkill
              name="Spring"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
            />

            <StyledSkill
              name="Java"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/d/dd/Java_programming_language_logo.png
              "
            />
          </SingleColumn>
        </div>
      </StyledGridItem>
    </>
  );
};

export default About;
