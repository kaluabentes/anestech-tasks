import styled from "styled-components";

import { COLOR_SHARK } from "../../styles/colors";
import BaseIcon from "../Icon";

export const Nav = styled.nav`
  background: ${COLOR_SHARK};
  height: 100vh;
  width: 64px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Links = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
`;

export const Button = styled.button`
  padding: 0;
  margin: 0;
  background: transparent;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Icon = styled(BaseIcon)`
  color: white;
  font-size: 32px;
`;

export const Logo = styled.img`
  width: 56px;
`;