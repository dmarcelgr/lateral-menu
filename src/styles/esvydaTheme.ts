import { createTheme, Theme } from '@mui/material';
import '@fontsource/roboto';

const esvydaTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#0e405e',
      lightblue: '#1972a8',
      accent: '#e8911d',
      text: '#1A3443',
      light: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          fontSize: '2rem',
          color: '#ffffffc7',
          '&:hover': {
            color: '#ffffff',
          },
          width: '40px',
          minWidth: 'auto',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.8rem',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0e405e',
          color: '#fff',
        },
      },
    },
  },
});

export default esvydaTheme;
