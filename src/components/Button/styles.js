import styled, { css } from "styled-components";
import { COLOR_SHARK } from "../../styles/colors";

export const Container = styled.button`
  font-size: 1rem;
  padding: 12px 15px;
  border: 0;
  width: 100%;
  display: block;
  border: 0;
  background: ${COLOR_SHARK};
  color: white;
  border-radius: 4px;
  opacity: 0.9;
  transition: 0.3s;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    opacity: 1;
  }

  ${(props) =>
    props.isInline &&
    css`
      display: inline-block;
      width: auto;
    `}
`;
