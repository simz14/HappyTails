import { createGlobalStyle } from "styled-components";
import { colors } from "../themes/colors";
import { typography } from "../themes/typography";

const GlobalStyle = createGlobalStyle`
  & p {
    color:${colors.lightGrey};
    font-size: ${typography.size.small};
  }
  & h1 {
    font-family: ${typography.family.extra};
    font-size: 67px;
    color: ${colors.darkestPurple}; 
    margin:0;

    }
   & h2 {
    color: ${colors.darkestPurple};
    font-family: ${typography.family.extra};
    font-size: ${typography.size.mHeader}; 
    margin:0
  }
  & h3 {
    color: ${colors.darkestPurple};
    font-family: ${typography.family.extra};
    font-size: ${typography.size.xLarge}; 
    margin:0;

  }

  @media (max-width: 1030px) {
      & h1 {
        font-size: ${typography.size.lHeader};
      }
  }

  @media (max-width: 750px) {
    & h1 {
        font-size: 40px;
      }
    & h2 {
      font-size: ${typography.size.xxLarge};
    }  
    & h3 {
    color: ${colors.darkestPurple};
    font-family: ${typography.family.extra};
    font-size: ${typography.size.large}; 
    margin:0;

  }

  }
`;

export default GlobalStyle;
