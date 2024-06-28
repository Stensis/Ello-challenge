import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5ACCCC',
      contrastText: '#335C6E',   
    },
    secondary: {
      main: '#FABD33',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#CFFAFA',
    },
    text: {
      primary: '#335C6E',
    },
    error: {
      main: '#F76434',
    },
  },
  typography: {
    fontFamily: 'Mulish, sans-serif',
  },
});

export default theme;
