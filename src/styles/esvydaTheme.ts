import { createTheme, Theme } from '@mui/material';
import '@fontsource/roboto';

const esvydaTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#0e405e',
      dark: '#1A3443',
      darker: '#0b364f',
      light: '#1972a8',
    },
    secondary: {
      light: '#ffffff',
      main: '#858585',
      lightgrey: '#B8B8B8',
      shadow: '#e5e5e5',
      dark: '#606060',
      darker: '#000000',
    },
    orange: {
      main: '#e8911d',
    },
    error: {
      main: '#f44336',
    },
    success: {
      main: '#4caf50',
    },
    warning: {
      main: '#e8911d',
    },
    info: {
      main: '#1972a8',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 15,
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: '500',
    },
    body1: {
      fontSize: '15px',
    },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          minWidth: 'auto',
        },
      },
    },
  },
});

export default esvydaTheme;
