import styled, { css } from "styled-components";

import card from "../../styles/components/card";

export const Container = styled.table`
  ${card}

  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

const commonCell = css`
  padding: 16px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  text-align: left;
`;

export const Head = styled.th`
  ${commonCell}
`;

export const Data = styled.td`
  ${commonCell}
`;

export const Row = styled.tr`
  &:last-of-type {
    ${Head}, ${Data} {
      border-bottom: 0;
    }
  }
`;
