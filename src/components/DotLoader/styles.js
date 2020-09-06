import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 18px;
`;

const growDot = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const Dot = styled.div`
  height: 3px;
  width: 3px;
  margin: 0 5px;
  border-radius: 50%;
  animation: ${growDot} 1.5s linear infinite;
  background: ${(props) => props.color};

  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;
