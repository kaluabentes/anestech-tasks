import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { COLOR_BLACK } from "./colors";

export default createGlobalStyle`
  ${normalize}
  :root {
    font-family: 'Open Sans', sans-serif;
    color: ${COLOR_BLACK};
  }
  * {
    box-sizing: border-box;
  }
  
  button {
    cursor: pointer;
  }

  ::placeholder { 
    color: rgba(0, 0, 0, 0.3);
    opacity: 1; 
  }

  :-ms-input-placeholder { 
    color: rgba(0, 0, 0, 0.3);
  }

  ::-ms-input-placeholder { 
    color: rgba(0, 0, 0, 0.3);
  }
`;
