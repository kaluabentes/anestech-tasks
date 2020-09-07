import styled, { css } from "styled-components";

import card from "../../styles/components/card";

export const Container = styled.table`
  ${card}

  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
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
