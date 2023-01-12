import styled from "styled-components";
const StyledImageWrapper = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: url(${(props) => props.logoUrl}) center/contain no-repeat;
`;

export default StyledImageWrapper;
