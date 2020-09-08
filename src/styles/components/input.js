import { css } from "styled-components";

import { COLOR_SHARK } from "../../styles/colors";

export default css`
  font-size: 1rem;
  padding: 0 15px;
  border-radius: 0;
  width: 100%;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 46px;

  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px ${COLOR_SHARK};
  }

  ${(props) =>
    props.margin &&
    css`
      margin: ${(props) => props.margin}px;
    `}
`;
