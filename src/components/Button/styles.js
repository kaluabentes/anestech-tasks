import styled from "styled-components";
import { COLOR_SHARK } from "../../styles/colors";

export const Container = styled.button`
  font-size: 1rem;
  padding: 12px 8px;
  border: 0;
  width: 100%;
  display: block;
  border: 0;
  background: ${COLOR_SHARK};
  color: white;
  border-radius: 4px;
  opacity: 0.9;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;
