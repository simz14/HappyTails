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

    }
   & h2 {
    color: ${colors.darkestPurple};
    font-family: ${typography.family.extra};
    font-size: ${typography.size.mHeader}; margin:0
  }
  & h3 {
    color: ${colors.darkestPurple};
    font-family: ${typography.family.extra};
    font-size: ${typography.size.xxLarge};
    &:hover {
      color: ${colors.mediumPurple};
    }
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
      font-size: ${typography.size.sHeader};
    }

  }
`;

export default GlobalStyle;
