import { createTheme } from "@mui/material/styles";

export let theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 9px 5px #f9f7f3",
          padding: "0.5rem",
        },
      },
    },
    MuiPopper: {
      styleOverrides: {
        root: {
          zIndex: "9999",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: "#eeeffc",
            color: "#786fe2",
            borderRadius: "5px",
            transition: "0.5s ease",
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "13px",
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
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "13px",
          fontWeight: "400",
          color: "#322258",
          fontFamily: ["Inter, sans-serif"],
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

theme = createTheme(theme, {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down("1030")]: {
            width: "100%",
            marginLeft: "0.5rem",
            marginTop: " 1rem",
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down("1030")]: {
            zIndex: "0",
          },
        },
      },
    },
  },
});
