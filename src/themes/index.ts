import {
  Theme,
  createTheme,
} from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      light: '#63b8ff',
      main: '#0989e3',
      dark: '#005db0',
      contrastText: '#000',
    },
    secondary: {
      main: '#4db6ac',
      light: '#82e9de',
      dark: '#00867d',
      contrastText: '#000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
