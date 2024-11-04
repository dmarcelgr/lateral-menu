import './styles/App.css';
import { LateralMenu } from './features/lateralMenu/lateralMenu.tsx';
import { ThemeProvider } from '@mui/material';
import esvydaTheme from './styles/esvydaTheme.ts';

function App() {
  return (
    <ThemeProvider theme={esvydaTheme}>
      <LateralMenu className="invisible lg:visible" />
    </ThemeProvider>
  );
}

export default App;
