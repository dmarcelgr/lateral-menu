import { createTheme, Theme } from '@mui/material';
import '@fontsource/roboto';

const esvydaTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#0e405e',
      lightblue: '#1972a8',
      accent: '#e8911d',
      darkerblue: '#1A3443',
      text: '#000000',
      light: '#ffffff',
      border: '#B8B8B8',
      grey: '#858585',
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
    h4: {
      fontSize: '1.125rem',
      fontWeight: '500',
    },
    body1: {
      fontSize: '14px',
    },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          fontSize: '3rem',
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
