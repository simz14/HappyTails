import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 9px 5px #f9f7f3",
          padding: "0.5rem",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          fontWeight: "400",
          fontFamily: ["Inter, sans-serif"],
          color: "#595266",
          transition: "0.5s ease",

          ":hover": {
            backgroundColor: " #eeeffc",
            borderRadius: "5px",
            transition: "0.5s ease",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: "#eeeffc",
            color: "#786fe2",
          },
        },
      },
    },
  },
});
