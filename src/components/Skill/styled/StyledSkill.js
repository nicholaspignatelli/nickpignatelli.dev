import styled from "styled-components";
import Skill from "..";

const StyledSkill = styled(Skill)`
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  margin-bottom: 4rem;
  color: var(--prime-color);
  width: 6rem;
  border: 1px solid #ffffff9a;
  border-radius: 1rem;
`;

export default StyledSkill;
