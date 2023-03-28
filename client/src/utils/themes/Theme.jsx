import { ThemeProvider } from "styled-components";
import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { radius } from "./radius";
import MuiTheme from "../MUI/MuiThemeProvider";

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={{ colors, typography, spacing, radius }}>
      <MuiTheme>{children}</MuiTheme>
    </ThemeProvider>
  );
}
