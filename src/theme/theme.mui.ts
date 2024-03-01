import createTheme from '@mui/material/styles/createTheme';
import { grey } from '@mui/material/colors';
import fontLight from '../assets/fonts/OpenSans/open-sans-v35-cyrillic_latin-300.woff2';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: grey[900],
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Raleway'), url(${fontLight}) format('woff2');
        `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
        },
      },
    },
  },
});

export default muiTheme;
