import styled from "styled-components";
import { Field } from "formik";

const StyledField = styled(Field)`
  border: 0.1rem solid var(--prime-color-a50);
  display: flex;
  align-items: center;
  padding: 0.2rem 0.3rem 0;
`;

export default StyledField;
