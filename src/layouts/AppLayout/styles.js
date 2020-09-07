import styled from "styled-components";
import { COLOR_WILD_SAND } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.div`
  height: 100vh;
  flex: 1 1 auto;
  overflow: auto;
  background: ${COLOR_WILD_SAND};
  padding: 40px;
`;
