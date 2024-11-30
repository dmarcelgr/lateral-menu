import './styles/App.css';
import { LateralMenu } from './features/lateralMenu/LateralMenu.tsx';
import { ThemeProvider } from '@mui/material';
import esvydaTheme from './styles/esvydaTheme.ts';
import { AppRouter } from './app/AppRouter.tsx';
import { BrowserRouter } from 'react-router-dom';
import './config/i18n/i18n';

function App() {
  return (
    <ThemeProvider theme={esvydaTheme}>
      <BrowserRouter>
        <AppRouter />
        <LateralMenu className="invisible lg:visible" />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
