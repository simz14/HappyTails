import styled from "styled-components";

export const Spacer = styled.div`
  width: 100%;
  ${({ theme, size }) => {
    switch (size) {
      case "xs":
        return `padding-top:${theme.spacing.space.xs};
        @media (max-width: 750px) {
          padding-top: ${theme.spacing.mobile.xs};
        }
        `;
      case "s":
        return `padding-top:${theme.spacing.space.s};
        @media (max-width: 750px) {
          padding-top: ${theme.spacing.mobile.s};
        }
        `;
      case "m":
        return `padding-top:${theme.spacing.space.m};
        @media (max-width: 750px) {
          padding-top: ${theme.spacing.mobile.m};
        }
        `;
      case "l":
        return `padding-top:${theme.spacing.space.l};
        @media (max-width: 750px) {
          padding-top: ${theme.spacing.mobile.l};
        }
        `;
      default:
        return ``;
    }
  }};
`;
