import styled, { css } from "styled-components";
import { COLOR_BLACK } from "../../styles/colors";

export const Container = styled.div`
  position: fixed;
  bottom: 15px;
  left: 15px;
  z-index: 4;
  background: ${COLOR_BLACK};
  color: white;
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  font-size: 0.875rem;
  transform: translateY(50px);
  opacity: 0;
  transition: 0.3s;
  visibility: hidden;

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
`;

export const CloseButton = styled.button`
  background: transparent;
  padding: 0;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  margin-left: 20px;

  & i {
    color: white;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;
