import './styles/App.css';
import { LateralMenu } from './features/lateralMenu/LateralMenu.tsx';
import { ThemeProvider } from '@mui/material';
import esvydaTheme from './styles/esvydaTheme.ts';
import { AppRouter } from './app/AppRouter.tsx';
import { BrowserRouter } from 'react-router-dom';
import './config/i18n/i18n';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={esvydaTheme}>
        <BrowserRouter>
          <AppRouter />
          <LateralMenu className="invisible lg:visible" />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
