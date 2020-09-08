import styled from "styled-components";

import input from "../../styles/components/input";

const Input = styled.input`
  ${input};
`;

Input.Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export default Input;
