import './styles/App.css';
import { LateralMenu } from './features/lateralMenu/LateralMenu.tsx';
import { ThemeProvider } from '@mui/material';
import esvydaTheme from './styles/esvydaTheme.ts';
import './config/i18n/i18n';

function App() {
  return (
    <ThemeProvider theme={esvydaTheme}>
      <LateralMenu className="invisible lg:visible" />
    </ThemeProvider>
  );
}

export default App;
