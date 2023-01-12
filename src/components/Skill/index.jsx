import StyledImageWrapper from "./styled/StyledImageWrapper";

const Skill = ({ name, logoUrl, className }) => (
  <div style={{ padding: "1rem 0" }} className={className}>
    <p>{name}</p>
    <StyledImageWrapper logoUrl={logoUrl} />
  </div>
);

export default Skill;
