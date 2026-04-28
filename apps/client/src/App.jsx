import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material';

import { store } from './store';
import themes from './themes';
import AppRoutes from './routes';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes()}>
          <AppRoutes />
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
