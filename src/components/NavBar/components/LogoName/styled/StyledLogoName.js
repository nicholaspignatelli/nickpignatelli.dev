import styled from "styled-components";
import LogoName from "..";

const StyledLogoName = styled(LogoName)`
  font-weight: bold;
  font-size: 1.375rem;

  cursor: pointer;
  /* padding: var(--px) var(--py); */
  /* background: linear-gradient(var(--accent-color) 0 0) bottom left
    var(--underline-width, 0%) 0.1em no-repeat; */

  /* display: inline-block; */
  padding: 0 0.5em 0.2em;
  text-decoration: none;
  white-space: nowrap;
  :hover {
    --underline-width: 100%;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.33rem;
  }
`;
export default StyledLogoName;
