import styled, { css } from "styled-components";

import card from "../../styles/components/card";
import { COLOR_WILD_SAND } from "../../styles/colors";

export const Card = styled.div`
  ${card}
  padding: 15px;
`;

export const Description = styled.p`
  margin: 0 0 10px 0;
`;

const common = css`
  margin: 0;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.3);
`;

export const StartDate = styled.p`
  ${common}
  margin: 0 0 5px 0;
`;

export const User = styled.p`
  ${common}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;
