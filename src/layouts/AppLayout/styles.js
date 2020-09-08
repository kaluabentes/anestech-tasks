import styled from "styled-components";
import { COLOR_WILD_SAND } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
`;

export const MainContainer = styled.div`
  background: ${COLOR_WILD_SAND};
  height: 100vh;
  overflow: auto;
  flex: 1 1 auto;
`;

export const Main = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
