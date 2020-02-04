import {createMuiTheme} from "@material-ui/core/styles"

export const styleTheme = createMuiTheme({
  // default parameters
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    type: "light",
    primary: {
      light: "#7986cb",
      main: "#3f51b5",
      dark: "#303f9f",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff"
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },

  // reference of the following parameters  https://bit.ly/2OrHrF4
  mixins: {
    // variant="dense" in Toolbar props can only apply to desktop devices.
    toolbar: {
      minHeight: 42
    }
  },
  props: {
    MuiCheckbox: {
      color: "primary"
    },
    MuiList: {
      dense: true
    },
    MuiRadio: {
      color: "primary"
    },
    MuiSwitch: {
      color: "primary"
    },
    MuiTable: {
      size: "small"
    },
    MuiTextField: {
      variant: "outlined"
    }
  },
  typography: {
    button: {
      textTransform: "none"
    },
    fontSize: 12
  }
})
