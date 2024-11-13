import { createTheme, Theme } from '@mui/material';
import '@fontsource/roboto';

const esvydaTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#0e405e',
      dark: '#1A3443',
      light: '#1972a8',
    },
    orange: {
      main: '#e8911d',
    },
    greyscale: {
      light: '#ffffff',
      main: '#858585',
      lightgrey: '#B8B8B8',
      shadow: '#e5e5e5',
      darker: '#000000',
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
